from inspect import Parameter, signature
from typing import Any, Dict
from pathlib import Path
import pandas as pd
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from openbb_terminal.sdk import openbb

from openbb_terminal.core.config.paths import MISCELLANEOUS_DIRECTORY

MAP_PATH = MISCELLANEOUS_DIRECTORY / "library" / "trail_map.csv"
MAP_FORECASTING_PATH = MISCELLANEOUS_DIRECTORY / "library" / "trail_map_forecasting.csv"
MAP_OPTIMIZATION_PATH = (
    MISCELLANEOUS_DIRECTORY / "library" / "trail_map_optimization.csv"
)

from openbb_terminal.core.library.trail_map import (
    FORECASTING_TOOLKIT_ENABLED as FORECASTING,
    MISCELLANEOUS_DIRECTORY,
    OPTIMIZATION_TOOLKIT_ENABLED as OPTIMIZATION,
)

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/check", status_code=200)
def check_rest():
    return "success"


@app.post("/sdk", status_code=200)
def access_sdk(request: Dict[str, Any]):
    print(request)
    target = request.get("trailmap", "")
    target_list = target.split(".")
    raw = request.get("raw", True)
    parameters = request.get("parameters", {})
    if not isinstance(raw, str):
        clean_raw = raw
    elif raw.lower() == "true":
        clean_raw = True
    elif raw.lower() == "false":
        clean_raw = False
    else:
        clean_raw = raw
    if not target:
        raise HTTPException(status_code=400, detail="No 'trailmap' key included")
    if not isinstance(clean_raw, bool):
        raise HTTPException(status_code=400, detail="Key 'raw' mut be a boolean")
    if not clean_raw:
        raise HTTPException(status_code=400, detail="Raw must be true for now")

    final_func = openbb
    for item in target_list:
        final_func = getattr(final_func, item)
    response = final_func(**parameters)
    if isinstance(response, pd.DataFrame):
        response = response.to_json()
    return response


@app.get("/trailmap", status_code=200)
def trailmap():
    test = initialize()
    return test


def get_trailmaps() -> list:
    def csv_df(path: Path) -> pd.DataFrame:
        columns = ["trail", "model", "view"]
        df = pd.read_csv(path, usecols=columns, keep_default_na=False)
        df.set_index("trail", inplace=True)
        df.sort_index(inplace=True)
        return df

    dfs = []
    for tmap_csv in [MAP_PATH, MAP_FORECASTING_PATH, MAP_OPTIMIZATION_PATH]:

        if tmap_csv == MAP_FORECASTING_PATH and not FORECASTING:
            break
        if tmap_csv == MAP_OPTIMIZATION_PATH and not OPTIMIZATION:
            break
        dfs.append(csv_df(tmap_csv))

    df = pd.concat(dfs)
    df.sort_index(inplace=True)

    return df.index.unique().tolist()


def add_todict(
    d: dict, location_path: list, cmd_name: str, full_trail: str, params: dict = None
) -> dict:
    """Adds the trailmap to the dictionary. This function creates the dictionary paths to the function.


    Parameters
    ----------
    d : dict
        The dictionary to add the path to
    location_path : list
        The path to the function
    cmd_name : str
        The name of the function
    full_path : str
        The full path to the function

    Returns
    -------
    dict
        The updated dictionary
    """

    if location_path[0] == "":
        d[cmd_name] = {"trailmap": full_trail, "parms": params}
        return d

    if location_path[0] not in d:
        d[location_path[0]] = {}

    if len(location_path) > 1:
        add_todict(d[location_path[0]], location_path[1:], cmd_name, full_trail, params)
    else:
        d[location_path[0]][cmd_name] = {"trailmap": full_trail, "parms": params}
    return d


# @app.get("/app", status_code=200)
def initialize():
    trailmaps = get_trailmaps()
    index_dict = {}
    for trail in trailmaps:

        tmp = trail.split(".")[:-1]
        cmd_name = trail.split(".")[-1]
        if len(tmp) == 0:
            tmp = [""]

        index_dict = add_todict(index_dict, tmp, cmd_name, trail)

        func = None
        for t in tmp:
            try:
                if func is None and t == "":
                    func = getattr(openbb, cmd_name)
                    break
                if func is None:
                    func = getattr(openbb, t)
                else:
                    func = getattr(func, t)
                if t == tmp[-1]:
                    func = getattr(func, cmd_name)
            except Exception as e:
                print(t)
                print(e)
                func = None
                break

        if func:
            params = signature(func).parameters
            parms_dict = {}
            for param in params:
                try:
                    parms_dict[param] = {
                        "type": f"{params[param].annotation.__name__}",
                        "default": None,
                        "required": False,
                    }
                    if (
                        params[param].kind is Parameter.POSITIONAL_OR_KEYWORD
                        and params[param].default is Parameter.empty
                    ):
                        parms_dict[param]["required"] = True
                    elif params[param].default is not Parameter.empty:
                        parms_dict[param]["default"] = params[param].default
                except:
                    print(param)

            index_dict = add_todict(index_dict, tmp, cmd_name, trail, parms_dict)

    return index_dict
