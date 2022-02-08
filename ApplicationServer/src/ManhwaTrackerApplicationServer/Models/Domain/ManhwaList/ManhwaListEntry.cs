using System.ComponentModel.DataAnnotations;

namespace ManhwaTrackerApplicationServer.Models.ManhwaList;
using Manhwa;

public class ManhwaListEntry
{
    [Key]
    public int Id { get; set; }
    public Manhwa Manhwa { get; set; }
    public int LatestReadChapter { get; set; }
}