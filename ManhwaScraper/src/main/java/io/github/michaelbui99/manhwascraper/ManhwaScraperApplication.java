package io.github.michaelbui99.manhwascraper;

import io.github.michaelbui99.manhwascraper.model.scraper.ManhwaScraper;
import io.github.michaelbui99.manhwascraper.model.scraper.ManhwaScraperImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ManhwaScraperApplication {
    private final static Logger LOGGER = LoggerFactory.getLogger(ManhwaScraperApplication.class);

    public static void main(String[] args) {
        LOGGER.info("Swagger-UI at: http://localhost:8080/swagger-ui.html");
        SpringApplication.run(ManhwaScraperApplication.class, args);
    }

    @Bean public ManhwaScraper manhwaScraper(){
        return new ManhwaScraperImpl();
    }

}
