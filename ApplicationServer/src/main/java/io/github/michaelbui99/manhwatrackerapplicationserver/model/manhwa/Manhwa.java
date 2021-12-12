package io.github.michaelbui99.manhwatrackerapplicationserver.model.manhwa;

import java.time.LocalDate;
import java.util.List;

public class Manhwa {
    private int id;
    private int chapterCount;
    private String title;
    private String description;
    private String format;
    private ManhwaStatus status;
    private LocalDate releaseDate;
    private LocalDate endDate;
    private List<Genre> titles;
    private List<ManhwaSynonym> synonyms;
}
