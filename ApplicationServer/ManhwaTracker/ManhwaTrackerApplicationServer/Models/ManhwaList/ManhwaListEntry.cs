namespace ManhwaTrackerApplicationServer.Models.ManhwaList;
using Manhwa;

public class ManhwaListEntry
{
    public Manhwa Manhwa { get; set; }
    public int LatestReadChapter { get; set; }
}