import json
from flask import Flask
from flask_restful import Resource, Api, reqparse
from manhwa_dao import ManhwaDAO
from manhwa_scraper import ManhwaScraper

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument("scrapeTask")


class ScrapeTaskSingle(Resource):
    def post(self):
        args = parser.parse_args()
        scraper = ManhwaScraper()
        result = scraper.scrape_page(args["scrapeTask"])
        return json.dumps(result.__dict__), 200


api.add_resource(ScrapeTaskSingle, "/api/scrapetask")

if __name__ == "__main__":
    app.run(debug=True)
