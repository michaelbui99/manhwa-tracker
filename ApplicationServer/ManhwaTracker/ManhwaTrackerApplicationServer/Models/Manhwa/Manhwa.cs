namespace ManhwaTrackerApplicationServer.Models.Manhwa;

/// <summary>
/// Manhwa (Korean Comic) that can be added to user created lists.
/// </summary>
public class Manhwa
{
    /// <summary>
    /// Internal ID of the Manhwa
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// English title of the Manhwa if any is available. Titles in different languages are found in <c>Synonyms</c>
    /// </summary>
    public string? Title { get; set; }

    /// <summary>
    /// Description / summary for Manhwa. Summary from official sources such as author / publisher is preferred.
    /// </summary>
    public string? Description { get; set; }

    public string? Format { get; set; }

    /// <summary>
    /// Release status of the Manhwa. 
    /// </summary>
    public Status Status { get; set; }

    /// <summary>
    /// The source material that the Manhwa is based on. 
    /// </summary>
    public SourceMaterial SourceMaterial { get; set; }

    /// <summary>
    /// The date of when the first chapter of the Manhwa was released.
    /// </summary>
    public DateTime? ReleaseDate { get; set; }

    /// <summary>
    /// The date of when the last chapter of the Manhwa was released.
    /// Only relevant if the Status of the Manhwa is FINISHED or CANCELLED.
    /// </summary>
    public DateTime? EndDate { get; set; }

    /// <summary>
    /// The total count of released chapters.
    /// </summary>
    public int ChapterCount { get; set; }
    
    /// <summary>
    /// URL for the CoverImage if any exists.
    /// </summary>
    public string? CoverImage { get; set; }
    
    /// <summary>
    /// All the tags that describes the Manhwa, e.g. Dungeon, Anti-Hero etc.
    /// </summary>
    public IEnumerable<Tag> Tags { get; set; }
    
    /// <summary>
    /// All the genres of the Manwha, e.g. Fantasy, Action, Comedy etc.
    /// </summary>
    public IEnumerable<Genre> Genres { get; set; }
    
    /// <summary>
    /// The alternative titles and titles in other languages for the Manhwa.
    /// </summary>
    public IEnumerable<Synonym> Synonyms { get; set; }
}