using ManhwaTrackerApplicationServer.DataAccess;
using ManhwaTrackerApplicationServer.Models.Manhwa;
using Microsoft.EntityFrameworkCore;

namespace ManhwaTrackerApplicationServer.Repositories;

public class ManhwaRepository : IManhwaRepository
{
    private readonly ManhwaTrackerDbContext _dbContext;
    private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();

    public ManhwaRepository(ManhwaTrackerDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<IEnumerable<Manhwa>> GetAllAsync()
    {
        return await _dbContext.Manhwas.Include(manhwa => manhwa.Genres).Include(manhwa => manhwa.Tags).Include(manhwa => manhwa.Synonyms).ToListAsync();
    }

    public async Task<Manhwa> GetByIdAsync(int id)
    {
        return await _dbContext.Manhwas.Include(manhwa => manhwa.Genres).Include(manhwa => manhwa.Tags).Include(manhwa => manhwa.Synonyms).FirstOrDefaultAsync(manhwa => manhwa.Id == id);
    }

    public async Task<IEnumerable<Manhwa>> GetByTitleAsync(string title)
    {
        return await _dbContext.Manhwas.Include(manhwa => manhwa.Genres).Include(manhwa => manhwa.Tags).Include(manhwa => manhwa.Synonyms).Where(manhwa => manhwa.Title.ToLower().Contains(title.ToLower())).ToListAsync();
    }
}