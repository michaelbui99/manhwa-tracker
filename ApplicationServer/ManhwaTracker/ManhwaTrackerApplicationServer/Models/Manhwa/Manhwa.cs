namespace ManhwaTrackerApplicationServer.Models.Manhwa;

public class Manhwa
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public string? Format { get; set; }
    public Status Status { get; set; }
    public SourceMaterial SourceMaterial { get; set; }
    public DateTime? ReleaseDate { get; set; }
    public DateTime? EndDate { get; set; }
    public int ChapterCount { get; set; }
    public string? CoverImage { get; set; }
    public IEnumerable<Tag> Tags { get; set; }
    public IEnumerable<Genre> Genres { get; set; }
    public IEnumerable<Synonym> Synonyms { get; set; }
}