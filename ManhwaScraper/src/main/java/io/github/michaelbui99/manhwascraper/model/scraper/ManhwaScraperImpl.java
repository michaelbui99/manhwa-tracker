package io.github.michaelbui99.manhwascraper.model.scraper;

import io.github.michaelbui99.manhwascraper.model.scraper.strategy.ManhwaScrapeStrategy;
import org.springframework.stereotype.Service;

import java.io.IOException;

public class ManhwaScraperImpl implements ManhwaScraper {
    private ManhwaScrapeStrategy scrapeStrategy;

    public ManhwaScraperImpl() {
    }


    @Override
    public ScrapeResult scrapeSingle(String url) throws IOException {
        if (scrapeStrategy == null){
            throw new IllegalStateException("No ManhwaScrapeStrategy has been set");
        }

        try {
            return scrapeStrategy.scrapeSingle(url);
        } catch (IOException e) {
            e.printStackTrace();
            throw e;
        }
    }

    @Override
    public void setScrapeStrategy(ManhwaScrapeStrategy strategy) {
        if (strategy == null){
            throw new IllegalArgumentException("Strategy cannot be null");
        }

        this.scrapeStrategy = strategy;
    }

    public ManhwaScrapeStrategy getScrapeStrategy() {
        return scrapeStrategy;
    }

}
