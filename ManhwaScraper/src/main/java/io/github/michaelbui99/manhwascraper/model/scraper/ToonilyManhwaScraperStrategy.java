package io.github.michaelbui99.manhwascraper.model.scraper;

import io.github.michaelbui99.manhwascraper.model.ScrapeResult;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ToonilyManhwaScraperStrategy implements ManhwaScrapeStrategy {

    public ToonilyManhwaScraperStrategy() {
    }


    @Override
    public ScrapeResult scrapeSingle(String url) throws IOException {
        try {
            if (!isToonilyUrl(url)) {
                throw new IllegalArgumentException("Scrape instance is only able to scrape Toonily.net pages. Cannot " +
                        "scrape url: " + url);
            }

            Document document = Jsoup.connect(url).get();

            String title = scrapeTitle(document);
            String description = scrapeSummary(document);
            int chapterCount = scrapeChapterCount(document);
            List<String> genres = scrapeGenres(document);


            return new ScrapeResult.ScrapeResultBuilder(title, chapterCount)
                    .description(description)
                    .genres(genres)
                    .build();
        } catch (IOException e) {
            e.printStackTrace();
            throw e;
        }
    }


    private boolean isToonilyUrl(String url) {
        return url.toLowerCase().contains("https://toonily.net/manga/");
    }

    private String scrapeTitle(Document document) {
        Elements titleContainerChildren = document.getElementsByClass("post-title");
        Element titleContainer = titleContainerChildren.get(0);
        Element titleHeader = titleContainer.child(0);
        String title = "";

        // The tag containing the tile sometimes have a "HOT" badge
        // The parser parses the titleHeader tag to 3 nodes when the Manhwa has the HOT badge
        //This check prevents index out of bound error when trying to extract the title from h1 tag
        if (titleHeader.childNodeSize() == 3) {
            title = titleHeader.childNodes().get(2).toString().trim();
        } else {
            title = titleHeader.childNodes().get(0).toString().trim();
        }

        return title;
    }

    private String scrapeSummary(Document document) {
        String description = "";

        Elements summaryContainer = document.getElementsByClass("summary__content");
        StringBuilder stringBuilder = new StringBuilder();

        for (Element element : summaryContainer) {
            stringBuilder.append(element.text());
        }

        description = stringBuilder.toString();
        return description;
    }

    private int scrapeChapterCount(Document document) {
        Elements chapterTags = document.getElementsByClass("wp-manga-chapter");

        // Tag contains chapter information in format "Chapter X"
        // Extract the chapter number only
        Element chapterTag = chapterTags.get(0);
        String chapterTagContent = chapterTag.text();

        int chapterCount = Integer.parseInt(chapterTagContent.split(" ")[1]);

        return chapterCount;
    }

    private List<String> scrapeGenres(Document document) {
        Elements genreTags = document.select("div.genres-content > a");

        List<String> genres = new ArrayList<>();
        for (Element genreTag : genreTags) {
            genres.add(genreTag.text());
        }

        return genres;
    }

}
