

class ScrapeResult:
    def __init__(self, title, description, chapter_count, genres):
        self.title = title
        self.description = description
        self.chapter_count = chapter_count
        self.genres = genres

    def __str__(self):
        return "Title: {title}\nDescription: {description}\nChapter Count: {chapter_count}\nGenres: {genres}".format(
            title=self.title, description=self.description, chapter_count=self.chapter_count, genres=self.genres)
