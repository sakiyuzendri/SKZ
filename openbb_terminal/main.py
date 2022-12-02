import pandas as pd
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import plotly
import plotly.express as px

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
    df.rename(columns={"date": "time"}, inplace=True)
    return df.to_dict(orient="records")


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


if __name__ == "__main__":
    uvicorn.run("main:app")