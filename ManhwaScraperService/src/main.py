import json
from flask import Flask, Response
from flask_restful import Resource, Api, reqparse
from manhwa_dao import ManhwaDAO
from manhwa_scraper import ManhwaScraper

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument("scrapeTask")
parser2 = reqparse.RequestParser()
parser2.add_argument("scrapeTasks", action="append")


class ScrapeTask(Resource):
    def post(self):
        args = parser.parse_args()
        scraper = ManhwaScraper()
        result = scraper.scrape_page(args["scrapeTask"])
        return json.dumps(result.__dict__), 200


class ScrapeTasks(Resource):
    def post(self):
        args = parser2.parse_args()
        print(args)
        scraper = ManhwaScraper()
        for url in args["scrapeTasks"]:
            print(url)
            scraper.add_scrape_task(url)

        response = []
        results = scraper.run_all_scrape_tasks()
        for result in results:
            response.append(result.__dict__)
        return json.dumps(response), 200


api.add_resource(ScrapeTask, "/api/scrapetask")
api.add_resource(ScrapeTasks, "/api/scrapetasks")

if __name__ == "__main__":
    app.run(debug=True)
