package io.github.michaelbui99.manhwascraper.api.dto;

public class ScrapePageRequestDTO {
    private String url;

    public ScrapePageRequestDTO() {
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUrl() {
        return url;
    }
}

