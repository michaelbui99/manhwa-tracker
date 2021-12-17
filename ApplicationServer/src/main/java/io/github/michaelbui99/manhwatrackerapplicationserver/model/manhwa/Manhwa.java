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
    private List<Genre> titles;
    private List<ManhwaSynonym> synonyms;

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

    public List<Genre> getTitles() {
        return titles;
    }

    public void setTitles(List<Genre> titles) {
        this.titles = titles;
    }

    public List<ManhwaSynonym> getSynonyms() {
        return synonyms;
    }

    public void setSynonyms(List<ManhwaSynonym> synonyms) {
        this.synonyms = synonyms;
    }
}
