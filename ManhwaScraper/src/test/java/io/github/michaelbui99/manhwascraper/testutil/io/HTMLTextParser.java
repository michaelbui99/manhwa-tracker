package io.github.michaelbui99.manhwascraper.testutil.io;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import java.io.*;

public class HTMLTextParser {

    public static Document parse(File file) throws IOException {
        try (FileReader fr = new FileReader(file); BufferedReader br = new BufferedReader(fr)) {
            String currentLine;
            StringBuilder htmlString = new StringBuilder();

            while ((currentLine = br.readLine()) != null) {
                htmlString.append(currentLine);
            }

            return Jsoup.parse(htmlString.toString());
        } catch (IOException e) {
            e.printStackTrace();
            throw e;
        }
    }

}