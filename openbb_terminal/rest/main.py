from typing import Any, Dict
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from openbb_terminal.sdk import openbb

from openbb_terminal.core.config.paths import MISCELLANEOUS_DIRECTORY
from openbb_terminal.rest.rest_helpers import initialize, clean_request, clean_response

MAP_PATH = MISCELLANEOUS_DIRECTORY / "library" / "trail_map.csv"
MAP_FORECASTING_PATH = MISCELLANEOUS_DIRECTORY / "library" / "trail_map_forecasting.csv"
MAP_OPTIMIZATION_PATH = (
    MISCELLANEOUS_DIRECTORY / "library" / "trail_map_optimization.csv"
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
    cleaned = clean_request(request)
    target_list = cleaned.target.split(".")
    if not cleaned.target:
        raise HTTPException(status_code=400, detail="No 'trailmap' key included")
    if not isinstance(cleaned.raw, bool):
        raise HTTPException(status_code=400, detail="Key 'raw' mut be a boolean")
    if not cleaned.raw:
        raise HTTPException(status_code=400, detail="Raw must be true for now")

    final_func = openbb
    for item in target_list:
        final_func = getattr(final_func, item)
    response = final_func(**cleaned.parameters)
    return clean_response(response)


@app.get("/trailmap", status_code=200)
def trailmap():
    test = initialize()
    return test
