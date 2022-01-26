from manhwa_dao import ManhwaDAO
from manhwa_scraper import ManhwaScraper

# currently just used for testing while developing
dao = "test"
scraper = ManhwaScraper(manhwa_dao=dao)

scrape_result = scraper.scrape_single(
    "https://toonily.net/manga/martial-peak/")
print(scrape_result)
