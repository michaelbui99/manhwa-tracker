package io.github.michaelbui99.manhwascraper.model.scraper.strategy;

import java.util.Map;

import static java.util.Map.entry;

public class ScrapeStrategyFetcher {
    private static final Map<String, ManhwaScrapeStrategy> SCRAPE_STRATEGIES = Map.ofEntries(
            entry(SupportedScrapeStrategy.TOONILY.name(), new ToonilyManhwaScraperStrategy())
    );

    public static ManhwaScrapeStrategy getStrategy(SupportedScrapeStrategy strategy) {
        return SCRAPE_STRATEGIES.get(strategy.name());
    }
}
