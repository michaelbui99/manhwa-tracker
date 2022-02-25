package io.github.michaelbui99.manhwascraper.model.scraper;

import io.github.michaelbui99.manhwascraper.model.ScrapeResult;

import java.io.IOException;

public interface ManhwaScrapeStrategy {

    /**
     * Scrapes title, description, chapter count and genres from a url
     *
     * @param url url of the page from where information can be scraped
     * @throws IOException if connection to page could not be established
     */
    ScrapeResult scrapeSingle(String url) throws IOException;

}
