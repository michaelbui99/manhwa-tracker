package io.github.michaelbui99.manhwascraper.api.controller;

import io.github.michaelbui99.manhwascraper.api.dto.ReadScrapeResultDTO;
import io.github.michaelbui99.manhwascraper.api.dto.ReadScrapeResultsDTO;
import io.github.michaelbui99.manhwascraper.api.dto.ScrapePageRequestDTO;
import io.github.michaelbui99.manhwascraper.api.dto.ScrapePagesRequestDTO;
import io.github.michaelbui99.manhwascraper.model.scraper.ManhwaScraper;
import io.github.michaelbui99.manhwascraper.model.scraper.ScrapeResult;
import io.github.michaelbui99.manhwascraper.model.scraper.strategy.ScrapeStrategyFetcher;
import io.github.michaelbui99.manhwascraper.model.scraper.strategy.SupportedScrapeStrategy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class ManhwaScrapersController {
    private ManhwaScraper scraper;
    private final Logger LOGGER = LoggerFactory.getLogger(ManhwaScrapersController.class);

    @Autowired
    public ManhwaScrapersController(ManhwaScraper scraper) {
        this.scraper = scraper;
    }


    @PostMapping("/api/v1/manhwascrapers/toonily/tasks/single")
    public ResponseEntity<ReadScrapeResultDTO> scrapeToonilyPage(@RequestBody ScrapePageRequestDTO requestDTO) {
        LOGGER.info("POST Request for /manhwascrapers/toonily/tasks/single");
        String url = requestDTO.getUrl();
        this.scraper.setScrapeStrategy(ScrapeStrategyFetcher.getStrategy(SupportedScrapeStrategy.TOONILY));

        try {
            ScrapeResult result = this.scraper.scrapeSingle(url);
            ReadScrapeResultDTO resultDTO = new ReadScrapeResultDTO.ReadScrapeResultDTOBuilder(
                    result.getTitle(),
                    result.getChapterCount())
                    .description(result.getDescription())
                    .genres(result.getGenres())
                    .build();

            return ResponseEntity.ok(resultDTO);
        } catch (IOException e) {
            LOGGER.error("Failed to scrape page: {" + e.getMessage() + "}");
            return ResponseEntity.internalServerError().build();
        } catch (IllegalArgumentException e) {
            LOGGER.error(e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }


    @PostMapping("/api/v1/manhwascrapers/toonily/tasks/multiple")
    public ResponseEntity<ReadScrapeResultsDTO> scrapeToonilyPages(@RequestBody ScrapePagesRequestDTO requestDTO) {
        LOGGER.info("POST Request for /manhwascrapers/toonily/tasks/multiple");
        this.scraper.setScrapeStrategy(ScrapeStrategyFetcher.getStrategy(SupportedScrapeStrategy.TOONILY));
        ReadScrapeResultsDTO results = new ReadScrapeResultsDTO();

        for (String url : requestDTO.getUrls()) {
            try {
                ScrapeResult result = this.scraper.scrapeSingle(url);
                ReadScrapeResultDTO resultDTO = new ReadScrapeResultDTO.ReadScrapeResultDTOBuilder(
                        result.getTitle(),
                        result.getChapterCount())
                        .description(result.getDescription())
                        .genres(result.getGenres())
                        .build();

                results.addResult(resultDTO);
            } catch (IOException e) {
                LOGGER.error("Failed to scrape page: {" + e.getMessage() + "}");
                return ResponseEntity.internalServerError().build();
            } catch (IllegalArgumentException e) {
                e.printStackTrace();
                LOGGER.error(e.getMessage());
                return ResponseEntity.badRequest().build();
            }
        }

        return ResponseEntity.ok(results);
    }
}
