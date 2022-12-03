from inspect import Parameter, signature
import json
from pathlib import Path
import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import plotly
import plotly.express as px

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


@app.get("/", status_code=200)
def home(ticker: str, instrument_type: str = "stocks"):
    df = pd.DataFrame()
    if instrument_type == "stocks":
        df = openbb.stocks.load(ticker)
    elif instrument_type == "crypto":
        df = openbb.crypto.load(ticker)
    df.reset_index(inplace=True)
    df.columns = df.columns.str.lower()
    df["date"] = df["date"].dt.strftime("%Y-%m-%d")
    df.rename(columns={"date": "time"}, inplace=True)
    return df.to_dict(orient="records")


# example of function that works on react already
@app.get("/plot", status_code=200)
def plot():
    df = pd.DataFrame({
        "Fruit": ["Apples", "Oranges", "Bananas", "Apples", "Oranges", "Bananas"],
        "Amount": [4, 1, 2, 2, 4, 5],
        "City": ["SF", "SF", "SF", "Montreal", "Montreal", "Montreal"]
    })
    fig = px.bar(df, x="Fruit", y="Amount", barmode="group", color="City", color_discrete_sequence=["#e4003a", "#00ACFF"])
    fig.update_layout({
    "font_color": "white",
    'plot_bgcolor': 'rgba(0, 0, 0, 0)',
    'paper_bgcolor': 'rgba(0, 0, 0, 0)',
    })
    graphJSON = plotly.io.to_json(fig, pretty=True)
    return graphJSON

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
    d: dict, location_path: list, cmd_name: str, full_trail: str, parms: dict = None
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
        d[cmd_name] = {"trailmap": full_trail, "parms": parms}
        return d

    if location_path[0] not in d:
        d[location_path[0]] = {}

    if len(location_path) > 1:
        add_todict(d[location_path[0]], location_path[1:], cmd_name, full_trail, parms)
    else:
        d[location_path[0]][cmd_name] = {"trailmap": full_trail, "parms": parms}
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
            parms = signature(func).parameters
            parms_dict = {}
            for parm in parms:
                try:
                    parms_dict[parm] = {
                        "type": f"{parms[parm].annotation.__name__}",
                        "default": None,
                        "required": False,
                    }
                    if (
                        parms[parm].kind is Parameter.POSITIONAL_OR_KEYWORD
                        and parms[parm].default is Parameter.empty
                    ):
                        parms_dict[parm]["required"] = True
                    elif parms[parm].default is not Parameter.empty:
                        parms_dict[parm]["default"] = parms[parm].default
                except:
                    print(parm)

            index_dict = add_todict(index_dict, tmp, cmd_name, trail, parms_dict)

    return index_dict

