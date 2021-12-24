namespace ManhwaTrackerApplicationServer.Models.Manhwa;

public class Genre
{
    public int Id { get; set; }
    public string? Name { get; set; }

    // List of Manhwa for EFC mapping
    public List<Manhwa> Manhwas { get; set; }
}