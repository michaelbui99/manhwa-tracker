using ManhwaTrackerApplicationServer.Models.Manhwa;
using ManhwaTrackerApplicationServer.Repositories;

namespace ManhwaTrackerApplicationServer.Services;

/// <inheritdoc cref="IManhwaService"/>
public class ManhwaService : IManhwaService
{
    /// <summary>
    /// Repository used to provide data access to this service implementation.
    /// </summary>
    private readonly IManhwaRepository _manhwaRepository;

    public ManhwaService(IManhwaRepository manhwaRepository)
    {
        _manhwaRepository = manhwaRepository;
    }

    /// <inheritdoc cref="IManhwaService.GetAllAsync"/>
    public async Task<IEnumerable<Manhwa>> GetAllAsync()
    {
        return await _manhwaRepository.GetAllAsync();
    }

    /// <inheritdoc cref="IManhwaService.GetByIdAsync"/>
    public async Task<Manhwa> GetByIdAsync(int id)
    {
        return await _manhwaRepository.GetByIdAsync(id);
    }

    /// <inheritdoc cref="IManhwaService.GetByTitleAsync"/>
    public async Task<IEnumerable<Manhwa>> GetByTitleAsync(string title)
    {
        return await _manhwaRepository.GetByTitleAsync(title);
    }
}