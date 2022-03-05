package io.github.michaelbui99.manhwascraper.model.scraper.strategy;

import io.github.michaelbui99.manhwascraper.model.scraper.ManhwaScraper;
import io.github.michaelbui99.manhwascraper.model.scraper.ManhwaScraperImpl;
import io.github.michaelbui99.manhwascraper.model.scraper.ScrapeResult;
import io.github.michaelbui99.manhwascraper.testutil.io.HTMLTextFileParser;
import org.jsoup.Connection;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.powermock.api.mockito.PowerMockito;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.powermock.api.support.membermodification.MemberMatcher.method;

import java.io.File;
import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doReturn;

public class ToonilyManhwaScraperStrategyTest {

    private ManhwaScraper scraper;
    private final String URL = "https://toonily.net/manga/solo-leveling-2/";

    @BeforeEach
    public void setup() {
        scraper = new ManhwaScraperImpl();
        scraper.setScrapeStrategy(ScrapeStrategyFetcher.getStrategy(SupportedScrapeStrategy.TOONILY));
    }

    @Test
    public void scrapeSingle_ReturnsCorrectValues() throws IOException {
        // Arrange
        String currentFolderPathFromProjectRoot = "src\\test\\java\\io\\github\\michaelbui99\\manh" +
                "wascraper\\testutil\\io\\";
        String savedHtmlTextFileName = "toonily_sololeveling_html.txt";
        File file = new File(currentFolderPathFromProjectRoot + savedHtmlTextFileName);
        PowerMockito.stub(method(Connection.class, "get")).toReturn(HTMLTextFileParser.parse(file));

        final String EXPECTED_TITLE = "Solo Leveling";
        final String EXPECTED_DESCRIPTION = "10 years ago, after “the Gate” that connected the real world with the monster world" +
                " opened, some of the ordinary, everyday people received the power to hunt monsters within the Gate. " +
                "They are known as “Hunters”. However, not all Hunters are powerful. My name is Sung Jin-Woo, an " +
                "E-rank Hunter. I’m someone who has to risk his life in the lowliest of dungeons, the “World’s " +
                "Weakest”. Having no skills whatsoever to display, I barely earned the required money by fighting in " +
                "low-leveled dungeons… at least until I found a hidden dungeon with the hardest difficulty within the" +
                " D-rank dungeons! In the end, as I was accepting death, I suddenly received a strange power, a quest" +
                " log that only I could see, a secret to leveling up that only I know about! If I trained in " +
                "accordance with my quests and hunted monsters, my level would rise. Changing from the weakest Hunter" +
                " to the strongest S-rank Hunter!";
        final int EXPECTED_CHAPTER_COUNT = 179;

        // Act
        ScrapeResult result = this.scraper.scrapeSingle(URL);

        // Assert
        assertEquals(EXPECTED_TITLE, result.getTitle());
        assertEquals(EXPECTED_DESCRIPTION, result.getDescription());
        assertEquals(EXPECTED_CHAPTER_COUNT, result.getChapterCount());
    }

    @Test
    public void scrapeSingle_InvalidURL_ThrowsIllegalArgumentException(){
        // Arrange
        String invalidUrl = "nottoonily.net/manga";

        // Act & Assert
        assertThrows(IllegalArgumentException.class, ()->{
            this.scraper.scrapeSingle(invalidUrl);
        });
    }
}