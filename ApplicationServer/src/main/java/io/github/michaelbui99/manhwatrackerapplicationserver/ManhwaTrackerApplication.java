package io.github.michaelbui99.manhwatrackerapplicationserver;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ManhwaTrackerApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(ManhwaTrackerApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(ManhwaTrackerApplication.class, args);
        LOGGER.info("Swagger-UI at: http://localhost:8080/swagger-ui.html");
    }

}
