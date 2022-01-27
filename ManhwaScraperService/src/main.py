from manhwa_dao import ManhwaDAO
from manhwa_scraper import ManhwaScraper

# currently just used for testing while developing
dao = "test"
scraper = ManhwaScraper(manhwa_dao=dao)

scraper.add_scrape_task(
    "https://toonily.net/manga/immortal-swordsman-in-the-reverse-world/")

scraper.add_scrape_task("https://toonily.net/manga/martial-peak/")

results = scraper.run_all_scraping_tasks()

for result in results:
    print(result)
