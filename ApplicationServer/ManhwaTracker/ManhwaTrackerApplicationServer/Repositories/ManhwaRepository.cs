using ManhwaTrackerApplicationServer.Models.Manhwa;
using Microsoft.EntityFrameworkCore;

namespace ManhwaTrackerApplicationServer.Repositories;

public class ManhwaRepository : IManhwaRepository
{
    private readonly DbContext _dbContext;

    public ManhwaRepository(DbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    public Task<IEnumerable<Manhwa>> GetAllAsync()
    {
        throw new NotImplementedException();
    }

    public Task<Manhwa> GetByIdAsync(int id)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<Manhwa>> GetByTitleAsync()
    {
        throw new NotImplementedException();
    }
}