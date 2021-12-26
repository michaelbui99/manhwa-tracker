namespace ManhwaTrackerApplicationServer.Repositories.Tag;

using ManhwaTrackerApplicationServer.Models.Manhwa;

public interface ITagRepository
{
    public Task<IEnumerable<Tag>> GetAllAsync();
}