package io.github.michaelbui99.manhwascraper.model.scraper;

import io.github.michaelbui99.manhwascraper.model.ScrapeResult;

import java.io.IOException;
import java.util.List;

public interface ManhwaScraper {
    /**
     * Scrapes title, description, chapter count and genres from a url
     *
     * @param url url of the page from where information can be scraped
     * @throws IOException if connection to page could not be established
     * @throws IllegalStateException if no ManhwaScrapeStrategy has been set
     */
    ScrapeResult scrapeSingle(String url) throws IOException, IllegalStateException;


}
