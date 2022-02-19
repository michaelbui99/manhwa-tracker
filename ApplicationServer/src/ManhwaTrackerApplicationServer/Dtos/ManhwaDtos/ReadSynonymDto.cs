using ManhwaTrackerApplicationServer.Models.Manhwa;

namespace ManhwaTrackerApplicationServer.Dtos.ManhwaDtos
{
    public class ReadSynonymDto
    {
        public TitleLanguage TitleLanguage { get; set; }
        public string? Title { get; set; }
    }
}
