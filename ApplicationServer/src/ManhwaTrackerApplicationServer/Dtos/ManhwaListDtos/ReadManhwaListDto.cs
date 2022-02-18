namespace ManhwaTrackerApplicationServer.Dtos.ManhwaListDtos
{
    public class ReadManhwaListDto
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public IEnumerable<ReadListEntryDto> ListEntries { get; set; } = new List<ReadListEntryDto>();
    }
}
