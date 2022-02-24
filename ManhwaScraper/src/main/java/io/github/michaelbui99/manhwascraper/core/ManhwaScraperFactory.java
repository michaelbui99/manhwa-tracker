package io.github.michaelbui99.manhwascraper.core;

import io.github.michaelbui99.manhwascraper.model.scraper.ManhwaScraper;

public interface ManhwaScraperFactory {
    ManhwaScraper create(ManhwaScraperType type);
}
