using ManhwaTrackerApplicationServer.Dtos.ManhwaDtos;

namespace ManhwaTrackerApplicationServer.Dtos.ManhwaListDtos
{
    public class ReadListEntryDto
    {
        public int Id { get; set; }
        public ReadManhwaDto Manhwa { get; set; }
        public int LatestReadChapter { get; set; }
    }
}
