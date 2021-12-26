using Microsoft.EntityFrameworkCore;

namespace ManhwaTrackerApplicationServer.Repositories.Genre;

using ManhwaTrackerApplicationServer.DataAccess;
using ManhwaTrackerApplicationServer.Models.Manhwa;


public class GenreRepository : IGenreRepository
{
    private readonly ManhwaTrackerDbContext _dbContext;

    public GenreRepository(ManhwaTrackerDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    /// <inheritdoc cref="IGenreRepository.GetAllAsync"/>
    public async Task<IEnumerable<Genre>> GetAllAsync()
    {
        return await _dbContext.Genres.ToListAsync();
    }
}