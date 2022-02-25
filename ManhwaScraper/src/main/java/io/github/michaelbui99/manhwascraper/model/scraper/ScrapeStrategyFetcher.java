package io.github.michaelbui99.manhwascraper.model.scraper;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static java.util.Map.entry;

public class ScrapeStrategyFetcher {
    private static final Map<String, ManhwaScrapeStrategy> scrapeStrategiesMap = Map.ofEntries(
            entry(SupportedScrapeStrategy.TOONILY.name(), new ToonilyManhwaScraperStrategy())
    );

    public static ManhwaScrapeStrategy getStrategy(SupportedScrapeStrategy strategy) {
        return scrapeStrategiesMap.get(strategy.name());
    }
}
