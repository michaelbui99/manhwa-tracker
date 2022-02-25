package io.github.michaelbui99.manhwascraper;

import io.github.michaelbui99.manhwascraper.model.scraper.ManhwaScraper;
import io.github.michaelbui99.manhwascraper.model.scraper.ManhwaScraperImpl;
import io.github.michaelbui99.manhwascraper.model.scraper.ScrapeStrategyFetcher;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ManhwaScraperApplication {
    public static void main(String[] args) {
        SpringApplication.run(ManhwaScraperApplication.class, args);
    }

    @Bean public ManhwaScraper manhwaScraper(){
        return new ManhwaScraperImpl();
    }

}
