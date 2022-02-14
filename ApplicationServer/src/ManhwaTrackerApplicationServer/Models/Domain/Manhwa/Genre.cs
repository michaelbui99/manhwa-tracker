using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ManhwaTrackerApplicationServer.Models.Manhwa;

public class Genre
{
    [Key]
    public int Id { get; set; }
    public string? Name { get; set; }

    // List of Manhwa for EFC mapping
    [JsonIgnore]
    public List<Manhwa> Manhwas { get; set; }
}