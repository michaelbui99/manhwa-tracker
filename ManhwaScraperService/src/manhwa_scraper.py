from queue import Queue
from bs4 import BeautifulSoup
from manhwa_dao import ManhwaDAO
import requests


class ManhwaScraper:
    def __init__(self, manhwa_dao):
        self.scrapingTaskQueue = Queue()
        self.manhwa_dao = manhwa_dao

    def scrape_single(self, url):
        """Scrapes a toonily.net page for Title, Chapter Count, Genres and Description"""
        page = requests.get(
            url)
        soup = BeautifulSoup(page, "lxml")
