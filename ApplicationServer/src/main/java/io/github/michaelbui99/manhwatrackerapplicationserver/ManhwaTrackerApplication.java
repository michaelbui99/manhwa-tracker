package io.github.michaelbui99.manhwatrackerapplicationserver;

import io.github.michaelbui99.manhwatrackerapplicationserver.services.ManhwaService;
import io.github.michaelbui99.manhwatrackerapplicationserver.services.ManhwaServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.beans.BeanProperty;

@SpringBootApplication
public class ManhwaTrackerApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(ManhwaTrackerApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(ManhwaTrackerApplication.class, args);
    }

    @Bean
    public ManhwaService manhwaService() {
        return new ManhwaServiceImpl();
    }
}
