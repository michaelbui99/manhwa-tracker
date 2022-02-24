package io.github.michaelbui99.manhwascraper;

import io.github.michaelbui99.manhwascraper.model.scraper.ManhwaScraper;
import io.github.michaelbui99.manhwascraper.model.scraper.ToonilyManhwaScraper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;

@SpringBootApplication
public class ManhwaScraperApplication {
    public static void main(String[] args) {
        SpringApplication.run(ManhwaScraperApplication.class, args);
    }

}
