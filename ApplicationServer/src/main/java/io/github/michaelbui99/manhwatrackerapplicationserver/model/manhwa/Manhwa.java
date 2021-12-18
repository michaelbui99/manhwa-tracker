package io.github.michaelbui99.manhwatrackerapplicationserver.model.manhwa;

import java.time.LocalDate;
import java.util.List;

public class Manhwa {
    private int id;
    private int chapterCount;
    private String title;
    private String description;
    private String format;
    private Status status;
    private LocalDate releaseDate;
    private LocalDate endDate;
    private List<Genre> genres;
    private List<ManhwaSynonym> synonyms;

    public Manhwa(ManhwaBuilder builder) {
        this.id = builder.id;
        this.chapterCount = builder.chapterCount;
        this.title = builder.title;
        this.description = builder.description;
        this.format = builder.format;
        this.status = builder.status;
        this.releaseDate = builder.releaseDate;
        this.endDate = builder.endDate;
        this.genres = builder.genres;
        this.synonyms = builder.synonyms;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getChapterCount() {
        return chapterCount;
    }

    public void setChapterCount(int chapterCount) {
        this.chapterCount = chapterCount;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public List<Genre> getGenres() {
        return genres;
    }

    public void setGenres(List<Genre> genres) {
        this.genres = genres;
    }

    public List<ManhwaSynonym> getSynonyms() {
        return synonyms;
    }

    public void setSynonyms(List<ManhwaSynonym> synonyms) {
        this.synonyms = synonyms;
    }

    public static class ManhwaBuilder{
        private int id;
        private int chapterCount;
        private String title;
        private String description;
        private String format;
        private Status status;
        private LocalDate releaseDate;
        private LocalDate endDate;
        private List<Genre> genres;
        private List<ManhwaSynonym> synonyms;

        public ManhwaBuilder id(int id){
            this.id = id;
            return this;
        }
        public ManhwaBuilder chapterCount(int chapterCount){
            this.chapterCount = chapterCount;
            return this;
        }
        public ManhwaBuilder title(String title){
           this.title = title;
           return this;
        }
        public ManhwaBuilder description(String description){
            this.description = description;
            return this;
        }
        public ManhwaBuilder format(String format){
            this.format = format;
            return this;
        }
        public ManhwaBuilder status(Status status){
            this.status = status;
            return this;
        }
        public ManhwaBuilder releaseDate(LocalDate releaseDate){
            this.releaseDate = releaseDate;
            return this;
        }
        public ManhwaBuilder endDate(LocalDate endDate){
            this.endDate = endDate;
            return this;
        }
        public ManhwaBuilder genres(List<Genre> genres){
            this.genres = genres;
            return this;
        }
        public ManhwaBuilder synonym(List<ManhwaSynonym> synonyms){
            this.synonyms = synonyms;
            return this;
        }
        public Manhwa build(){
            Manhwa manhwa = new Manhwa(this);
            return manhwa;
        }

    }
}
