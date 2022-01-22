namespace ManhwaTrackerApplicationServer.Services.Tag;

using ManhwaTrackerApplicationServer.Models.Manhwa;

public interface ITagService
{
    public Task<IEnumerable<Tag>> GetAllAsync();
}