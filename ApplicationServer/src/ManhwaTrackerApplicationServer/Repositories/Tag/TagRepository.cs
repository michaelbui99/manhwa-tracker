namespace ManhwaTrackerApplicationServer.Repositories.Tag;

using ManhwaTrackerApplicationServer.DataAccess;
using Microsoft.EntityFrameworkCore;

public class TagRepository : ITagRepository
{
    private readonly ManhwaTrackerDbContext _dbContext;
    private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();

    public TagRepository(ManhwaTrackerDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<IEnumerable<Models.Manhwa.Tag>> GetAllAsync()
    {
        var tags = await _dbContext.Tags.ToListAsync();
        return tags;
    }
}