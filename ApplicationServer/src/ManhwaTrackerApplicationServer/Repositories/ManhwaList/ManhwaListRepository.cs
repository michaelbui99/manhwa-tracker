using ManhwaTrackerApplicationServer.DataAccess;
using ManhwaTrackerApplicationServer.Models.ManhwaList;
using Microsoft.EntityFrameworkCore;

namespace ManhwaTrackerApplicationServer.Repositories.ManhwaList;
using ManhwaTrackerApplicationServer.Models.ManhwaList;

public class ManhwaListRepository : IManhwaListRepository
{
    private readonly ManhwaTrackerDbContext _dbContext;

    public ManhwaListRepository(ManhwaTrackerDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<ManhwaList> CreateAsync(string userEmail, string listName, string listDescription)
    {
        var owner = await _dbContext.Users.FirstOrDefaultAsync(user => user.Email == userEmail);
        var newList = new ManhwaList()
        {
            ListEntries = new List<ManhwaListEntry>(),
            Name = listName,
            Owner = owner,
            Description = listDescription
        };

        var createdList = (await _dbContext.ManhwaLists.AddAsync(newList)).Entity;

        await _dbContext.SaveChangesAsync();

        return createdList;
    }

    public Task AddListEntryAsync(int listId, ManhwaListEntry listEntry)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<ManhwaList>> GetAllByEmailAsync(string userEmail)
    {
        var lists = _dbContext.ManhwaLists.Include(list => list.ListEntries)
            .Where(list => list.Owner.Email == userEmail).AsEnumerable();
        return lists;
    }

    public Task DeleteAsync(int listId)
    {
        throw new NotImplementedException();
    }
}