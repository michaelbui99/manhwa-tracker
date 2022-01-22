using Microsoft.EntityFrameworkCore;

namespace ManhwaTrackerApplicationServer.Repositories.Genre;

using ManhwaTrackerApplicationServer.DataAccess;
using ManhwaTrackerApplicationServer.Models.Manhwa;


public class GenreRepository : IGenreRepository
{
    private readonly ManhwaTrackerDbContext _dbContext;
    private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();

    public GenreRepository(ManhwaTrackerDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    /// <inheritdoc cref="IGenreRepository.GetAllAsync"/>
    public async Task<IEnumerable<Genre>> GetAllAsync()
    {
        var genres =  await _dbContext.Genres.ToListAsync();
        return genres;
    }
}