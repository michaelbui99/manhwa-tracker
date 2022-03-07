package io.github.michaelbui99.manhwascraper.api.dto;

import java.util.List;

public class ScrapePagesRequestDTO {
    private List<String> urls;

    public ScrapePagesRequestDTO() {

    }

    public List<String> getUrls() {
        return urls;
    }

    public void setUrls(List<String> urls) {
        this.urls = urls;
    }
}
