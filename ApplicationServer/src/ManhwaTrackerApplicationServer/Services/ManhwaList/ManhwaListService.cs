using ManhwaTrackerApplicationServer.Models.ManhwaList;
using ManhwaTrackerApplicationServer.Repositories.ManhwaList;
using ManhwaTrackerApplicationServer.Repositories.User;

namespace ManhwaTrackerApplicationServer.Services.ManhwaList;

public class ManhwaListService : IManhwaListService
{
    private readonly IManhwaListRepository _listRepository;
    private readonly IUserService _userService;

    public ManhwaListService(IManhwaListRepository listRepository, IUserService userService)
    {
        _listRepository = listRepository;
        _userService = userService;
    }

    public async Task<Models.ManhwaList.ManhwaList> CreateAsync(string userEmail, string listName,
        string listDescription)
    {
        try
        {
            var user = await _userService.GetUserAsync(userEmail);
        }
        catch (KeyNotFoundException e)
        {
            throw new ArgumentException("Cannot create list for unregistered user");
        }

        try
        {
            var newList = await _listRepository.CreateAsync(userEmail, listName, listDescription);
            return newList;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public Task AddListEntryAsync(int listId, ManhwaListEntry listEntry)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<Models.ManhwaList.ManhwaList>> GetAllByEmailAsync(string userEmail)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync(int listId)
    {
        throw new NotImplementedException();
    }
}