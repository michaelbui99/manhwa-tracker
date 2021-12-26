using ManhwaTrackerApplicationServer.Models.Manhwa;
using ManhwaTrackerApplicationServer.Repositories;

namespace ManhwaTrackerApplicationServer.Services;

public class ManhwaService : IManhwaService
{
    private readonly IManhwaRepository _manhwaRepository;

    public ManhwaService(IManhwaRepository manhwaRepository)
    {
        _manhwaRepository = manhwaRepository;
    }
    public async Task<IEnumerable<Manhwa>> GetAllAsync()
    {
        return await _manhwaRepository.GetAllAsync();
    }

    public async Task<Manhwa> GetByIdAsync(int id)
    {
        return await _manhwaRepository.GetByIdAsync(id);
    }

    public async Task<IEnumerable<Manhwa>> GetByTitleAsync(string title)
    {
        return await _manhwaRepository.GetByTitleAsync(title);
    }
}