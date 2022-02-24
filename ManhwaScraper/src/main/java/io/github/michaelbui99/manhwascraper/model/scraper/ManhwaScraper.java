package io.github.michaelbui99.manhwascraper.model.scraper;

import io.github.michaelbui99.manhwascraper.model.ScrapeResult;

import java.io.IOException;
import java.util.List;

public interface ManhwaScraper {
    /**
     * Adds an ScrapeTask
     *
     * @param url url of the page from where information can be scraped
     * @throws IllegalArgumentException if provided URL is not valid for the specific Scraper implementation
     */
    void addScrapeTask(String url) throws IllegalArgumentException;

    /**
     * Scrapes title, description, chapter count and genres from a url
     *
     * @param url url of the page from where information can be scraped
     * @throws IOException if connection to page could not be established
     */
    ScrapeResult scrapeSingle(String url) throws IOException;

    /**
     * Scrapes all added scrape task urls and clears the scrapers list of scrape tasks
     *
     * @throws IOException if connection to page could not be established
     */
    List<ScrapeResult> runAllScrapeTasks() throws IOException;
}
