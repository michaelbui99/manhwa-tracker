using ManhwaTrackerApplicationServer.Models.Validation;
using ManhwaTrackerApplicationServer.Repositories.Manhwa;

namespace ManhwaTrackerApplicationServer.Services.Manhwa;

using ManhwaTrackerApplicationServer.Repositories;
using ManhwaTrackerApplicationServer.Models.Manhwa;

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
        var existingManhwa = await _manhwaRepository.GetByIdAsync(id);

        if (existingManhwa == null)
        {
            throw new KeyNotFoundException($"No manhwa with id: {id} exists");
        }

        return existingManhwa;
    }

    /// <inheritdoc cref="IManhwaService.GetByTitleAsync"/>
    public async Task<IEnumerable<Manhwa>> GetByTitleAsync(string title)
    {
        var existingManhwa = await _manhwaRepository.GetByTitleAsync(title);

        return existingManhwa;
    }

    /// <inheritdoc cref="IManhwaService.CreateAsync"/>
    public async Task<Manhwa> CreateAsync(Manhwa manhwa)
    {
        ManhwaModelValidator.ValidateManhwaModel(manhwa);

        var createdManhwa = await _manhwaRepository.CreateAsync(manhwa);

        if (createdManhwa == null)
        {
            throw new ArgumentException("Manhwa could not be created at this moment.");
        }

        return createdManhwa;
    }
}