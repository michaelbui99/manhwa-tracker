using System.ComponentModel.DataAnnotations;

namespace ManhwaTrackerApplicationServer.Models.ManhwaList;

public class ManhwaList
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string? Name { get; set; }
    public string? Description { get; set; }
    public IEnumerable<ManhwaListEntry> ListEntries { get; set; }
    public User.User Owner { get; set; }
}