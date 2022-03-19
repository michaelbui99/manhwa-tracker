# Build
FROM maven:3.6.0-jdk-11-slim as build
WORKDIR /app

COPY src /app/src
COPY pom.xml /app
RUN mvn -f /app/pom.xml clean package

# Package
FROM openjdk:11-jre-slim
COPY --from=build /app/target/ManhwaScraper-0.0.1-SNAPSHOT.jar /usr/local/lib/manhwa-scraper.jar
EXPOSE 8080
ENTRYPOINT [ "java", "-jar", "/usr/local/lib/manhwa-scraper.jar"]
