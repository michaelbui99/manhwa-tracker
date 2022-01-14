using ManhwaTrackerApplicationServer.Models.ManhwaList;

namespace ManhwaTrackerApplicationServer.Repositories.ManhwaListRepository;

public interface IManhwaListRepository
{
    public Task<ManhwaList> CreateAsync(string userEmail, string listName);
    public Task AddListEntryAsync(int listId, ManhwaListEntry listEntry);
    public Task<IEnumerable<ManhwaList>> GetAllByEmailAsync(string userEmail);
    public Task DeleteAsync(int listId);
}