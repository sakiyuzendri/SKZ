import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from openbb_terminal import sdk

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
        df = sdk.stocks.load(ticker)
    elif instrument_type == "crypto":
        df = sdk.crypto.load(ticker)
    df.reset_index(inplace=True)
    df.columns = df.columns.str.lower()
    df["date"] = df["date"].dt.strftime("%Y-%m-%d")
    # rename date to time
    df.rename(columns={"date": "time"}, inplace=True)
    return df.to_dict(orient="records")
