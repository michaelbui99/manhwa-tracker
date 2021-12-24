using ManhwaTrackerApplicationServer.Models.Manhwa;

namespace ManhwaTrackerApplicationServer.Services;

public class ManhwaService : IManhwaService
{
    public Task<IEnumerable<Manhwa>> GetAllAsync()
    {
        throw new NotImplementedException();
    }

    public Task<Manhwa> GetByIdAsync()
    {
        throw new NotImplementedException();
    }

    public Task<List<Manhwa>> GetByTitleAsync()
    {
        throw new NotImplementedException();
    }
}