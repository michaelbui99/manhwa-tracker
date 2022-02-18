namespace ManhwaTrackerApplicationServer.Dtos.ManhwaListDtos
{
    public class ReadListEntryDto
    {
        public int Id { get; set; }
        public ReaDManhwa Manhwa { get; set; }
        public int LatestReadChapter { get; set; }
    }
}
