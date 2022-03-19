package io.github.michaelbui99.manhwascraper.api.dto;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class ReadScrapeResultDTO {

    private String title;
    private String description;
    private int chapterCount;
    private List<String> genres;

    private ReadScrapeResultDTO(ReadScrapeResultDTOBuilder builder) {
        this.title = builder.getTitle();
        this.description = builder.getDescription();
        this.chapterCount = builder.getChapterCount();
        this.genres = Objects.requireNonNullElseGet(builder.genres, ArrayList::new);
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public int getChapterCount() {
        return chapterCount;
    }

    public List<String> getGenres() {
        return genres;
    }

    /**
     * Builder for ReadScrapeResultDTO.
     **/
    public static class ReadScrapeResultDTOBuilder {
        private String title;
        private String description;
        private int chapterCount;
        private List<String> genres;

        /**
         * Creates a new ReadScrapeResultDTO instance with the required params
         *
         * @param title        tile of the Manhwa
         * @param chapterCount amount of released chapters for the Manhwa
         * @throws IllegalArgumentException if title is null or empty
         * @throws IllegalArgumentException if chapterCount is negative, i.e. less than 0
         */
        public ReadScrapeResultDTOBuilder(String title, int chapterCount) {
            if ("".equals(title)) {
                throw new IllegalArgumentException("Invalid title");
            }

            if (chapterCount < 0) {
                throw new IllegalArgumentException("Invalid chapter count");
            }

            this.title = title;
            this.chapterCount = chapterCount;
            genres = new ArrayList<>();
        }

        public ReadScrapeResultDTOBuilder description(String description) {
            this.description = description;
            return this;
        }

        public ReadScrapeResultDTOBuilder genres(List<String> genres) {
            this.genres = genres;
            return this;
        }

        public String getTitle() {
            return title;
        }

        public String getDescription() {
            return description;
        }

        public int getChapterCount() {
            return chapterCount;
        }

        public List<String> getGenres() {
            return genres;
        }

        public ReadScrapeResultDTO build() {
            return new ReadScrapeResultDTO(this);
        }
    }
}
