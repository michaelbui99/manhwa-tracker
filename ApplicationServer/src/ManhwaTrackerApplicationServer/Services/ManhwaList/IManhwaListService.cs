using ManhwaTrackerApplicationServer.Models.ManhwaList;

namespace ManhwaTrackerApplicationServer.Services.ManhwaList;

public interface IManhwaListService
{
    public Task<Models.ManhwaList.ManhwaList> CreateAsync(string userEmail, string listName, string listDescription);
    public Task AddListEntryAsync(int listId, ManhwaListEntry listEntry);
    public Task<IEnumerable<Models.ManhwaList.ManhwaList>> GetAllByEmailAsync(string userEmail);
    public Task<IEnumerable<Models.ManhwaList.ManhwaList>> GetAllByUserIdAsync(int userId);
    public Task DeleteAsync(int listId);
}