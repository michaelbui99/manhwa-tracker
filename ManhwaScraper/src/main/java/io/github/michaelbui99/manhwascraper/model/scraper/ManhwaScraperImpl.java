package io.github.michaelbui99.manhwascraper.model.scraper;

import io.github.michaelbui99.manhwascraper.model.ScrapeResult;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
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

    public ManhwaScrapeStrategy getScrapeStrategy() {
        return scrapeStrategy;
    }

    public void setScrapeStrategy(ManhwaScrapeStrategy scrapeStrategy) {
        this.scrapeStrategy = scrapeStrategy;
    }
}
