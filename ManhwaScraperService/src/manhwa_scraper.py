from queue import Queue
from bs4 import BeautifulSoup
from manhwa_dao import ManhwaDAO
from scrape_result import ScrapeResult
import requests


class ManhwaScraper:
    def __init__(self):
        self.scrape_tasks = []

    def scrape_page(self, url):
        """Scrapes a toonily.net page for Title, Chapter Count, Genres and Description

           :param str url: toonily.net url of a specific Manhwa page 
        """

        # Request page and convert page structure to python obj
        page = requests.get(
            url).content
        soup = BeautifulSoup(page, "lxml")

        # Scrape needed information
        description = soup.find("div", class_="summary__content").p.text

        latest_chapter = soup.find(
            "li", class_="wp-manga-chapter").a.text.split(" ")[1]

        title_tag_content = str.splitlines(soup.find("h1").text)
        # The tag containing the tile sometimes have a "HOT" badge
        # This check prevents index out of bound error when trying to extract the title from h1 tag
        if (len(title_tag_content) > 2):
            title = title_tag_content[2]
        else:
            title = title_tag_content[1]
        genres = []
        genre_tags = soup.find("div", class_="genres-content")
        for genre_tag in genre_tags:
            genre = genre_tag.text
            # All valid genres is upper case on first character on toonily.net
            if (genre.strip() != "," and genre[0].isupper()):
                genres.append(genre)

        result = ScrapeResult(title=title, description=description,
                              chapter_count=latest_chapter, genres=genres)
        return result

    def add_scrape_task(self, url):
        """Adds a new Scrape task to be executed"""
        self.scrape_tasks.append(url)

    def run_all_scrape_tasks(self):
        """Executes all scraping tasks"""
        scrapeResults = []

        for url in self.scrape_tasks:
            result = self.scrape_page(url)
            scrapeResults.append(result)

        self.scrape_tasks.clear()
        return scrapeResults
