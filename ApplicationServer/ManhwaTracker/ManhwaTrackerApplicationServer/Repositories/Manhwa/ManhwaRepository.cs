namespace ManhwaTrackerApplicationServer.Repositories.Manhwa;

using ManhwaTrackerApplicationServer.DataAccess;
using ManhwaTrackerApplicationServer.Models.Manhwa;
using Microsoft.EntityFrameworkCore;

public class ManhwaRepository : IManhwaRepository
{
    private readonly ManhwaTrackerDbContext _dbContext;
    private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();

    public ManhwaRepository(ManhwaTrackerDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    /// <inheritdoc cref="IManhwaRepository.GetAllAsync"/>
    public async Task<IEnumerable<Manhwa>> GetAllAsync()
    {
        return await _dbContext.Manhwas.Include(manhwa => manhwa.Genres).Include(manhwa => manhwa.Tags)
            .Include(manhwa => manhwa.Synonyms).ToListAsync();
    }

    /// <inheritdoc cref="IManhwaRepository.GetByIdAsync"/>
    public async Task<Manhwa> GetByIdAsync(int id)
    {
        return await _dbContext.Manhwas.Include(manhwa => manhwa.Genres).Include(manhwa => manhwa.Tags)
            .Include(manhwa => manhwa.Synonyms).FirstOrDefaultAsync(manhwa => manhwa.Id == id);
    }

    /// <inheritdoc cref="IManhwaRepository.GetByTitleAsync"/>
    public async Task<IEnumerable<Manhwa>> GetByTitleAsync(string title)
    {
        return await _dbContext.Manhwas.Include(manhwa => manhwa.Genres).Include(manhwa => manhwa.Tags)
            .Include(manhwa => manhwa.Synonyms).Where(manhwa => manhwa.Title.ToLower().Contains(title.ToLower()))
            .ToListAsync();
    }
}