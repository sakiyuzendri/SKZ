"""Finnhub Model"""
__docformat__ = "numpy"

import logging
from typing import Dict

import pandas as pd
import requests

from gamestonk_terminal import config_terminal as cfg
from gamestonk_terminal.decorators import log_start_end
from gamestonk_terminal.rich_config import console

logger = logging.getLogger(__name__)


@log_start_end(log=logger)
def get_sentiment_stats(ticker: str) -> Dict:
    """Get sentiment stats [Source: finnhub]

    Parameters
    ----------
    ticker : str
        Ticker to get sentiment stats

    Returns
    -------
    Dict
        Get sentiment stats
    """
    response = requests.get(
        f"https://finnhub.io/api/v1/news-sentiment?symbol={ticker}&token={cfg.API_FINNHUB_KEY}"
    )

    df = pd.DataFrame()
    if response.status_code == 200:
        df = response.json()

        if df.empty:
            console.print(f"No sentiment stats found for {ticker}.\n")

    elif response.status_code == 401:
        console.print("[red]Invalid API Key[/red]\n")
    elif response.status_code == 403:
        console.print("[red]API Key not authorized for Premium Feature[/red]\n")
    else:
        console.print(f"Error in request: {response.json()['error']}", "\n")

    return df