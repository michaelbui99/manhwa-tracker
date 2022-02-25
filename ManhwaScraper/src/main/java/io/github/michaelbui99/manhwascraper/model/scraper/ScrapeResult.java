package io.github.michaelbui99.manhwascraper.model.scraper;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class ScrapeResult {
    private String title;
    private String description;
    private int chapterCount;
    private List<String> genres;

    private ScrapeResult(ScrapeResultBuilder builder) {
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
     * Builder for ScrapeResult. ScrapeResult can only be instantiated through the ScrapeResultBuilder
     **/
    public static class ScrapeResultBuilder {
        private String title;
        private String description;
        private int chapterCount;
        private List<String> genres;


        /**
         * Creates a new ScrapeResultBuilder instance with the required params
         *
         * @param title tile of the Manhwa
         * @param chapterCount amount of released chapters for the Manhwa
         * @throws IllegalArgumentException if title is null or empty
         * @throws IllegalArgumentException if chapterCount is negative, i.e. less than 0
         * */
        public ScrapeResultBuilder(String title, int chapterCount) {
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

        public ScrapeResultBuilder description(String description) {
            this.description = description;
            return this;
        }

        public ScrapeResultBuilder genres(List<String> genres) {
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

        public ScrapeResult build() {
            return new ScrapeResult(this);
        }
    }
}

