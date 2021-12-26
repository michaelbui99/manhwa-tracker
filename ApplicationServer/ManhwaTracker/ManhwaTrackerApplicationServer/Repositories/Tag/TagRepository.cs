namespace ManhwaTrackerApplicationServer.Repositories.Tag;

using ManhwaTrackerApplicationServer.DataAccess;
using Microsoft.EntityFrameworkCore;

public class TagRepository : ITagRepository
{
    private readonly ManhwaTrackerDbContext _dbContext;

    public TagRepository(ManhwaTrackerDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<IEnumerable<Models.Manhwa.Tag>> GetAllAsync()
    {
        return await _dbContext.Tags.ToListAsync();
    }
}