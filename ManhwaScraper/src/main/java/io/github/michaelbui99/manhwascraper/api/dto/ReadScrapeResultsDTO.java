package io.github.michaelbui99.manhwascraper.api.dto;

import java.util.ArrayList;
import java.util.List;

public class ReadScrapeResultsDTO {
    private List<ReadScrapeResultDTO> results = new ArrayList<>();


    public ReadScrapeResultsDTO() {
    }

    public ReadScrapeResultsDTO(List<ReadScrapeResultDTO> results) {
        this.results = results;
    }

    public void addResult(ReadScrapeResultDTO resultDTO) {
        this.results.add(resultDTO);
    }

    public void setResults(List<ReadScrapeResultDTO> results) {
        this.results = results;
    }

    public List<ReadScrapeResultDTO> getResults() {
        return this.results;
    }

}
