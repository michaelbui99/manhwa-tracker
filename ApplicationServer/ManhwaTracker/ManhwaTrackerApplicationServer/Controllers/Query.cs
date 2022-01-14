using HotChocolate.AspNetCore.Authorization;
using ManhwaTrackerApplicationServer.Models.Manhwa;
using ManhwaTrackerApplicationServer.Models.User;
using ManhwaTrackerApplicationServer.Services;
using ManhwaTrackerApplicationServer.Services.Genre;
using ManhwaTrackerApplicationServer.Services.Manhwa;
using ManhwaTrackerApplicationServer.Services.Tag;

namespace ManhwaTrackerApplicationServer.Controllers;

public class Query
{
    private readonly IManhwaService _manhwaService;
    private readonly IGenreService _genreService;
    private readonly ITagService _tagService;
    private readonly IUserService _userService;
    private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();

    public Query([Service] IManhwaService manhwaService, [Service] IGenreService genreService,
        [Service] ITagService tagService, [Service] IUserService userService)
    {
        _manhwaService = manhwaService;
        _genreService = genreService;
        _tagService = tagService;
        _userService = userService;
    }

    /// <summary>
    /// Fetches all the registered Manhwas in the system
    /// </summary>
    /// <returns>All registered Manhwas</returns>
    public async Task<IEnumerable<Manhwa>> AllManhwas()
    {
        _logger.Info("AllManhwas request received");
        return await _manhwaService.GetAllAsync();
    }

    /// <summary>
    /// Fetches a list of Manhwas by title.
    /// </summary>
    /// <remarks>
    /// The list will consists of Manhwas where provided title is a substring of Manhwas title
    /// The pattern matching is case insensitive.
    /// </remarks>
    /// <param name="title">title that will be used for generating the list of manhwas</param>
    /// <returns>All manhwa where Title contains the title param</returns>
    public async Task<IEnumerable<Manhwa>> ManhwasByTitle(string title)
    {
        _logger.Info("ManhwasByTitle request received");
        return await _manhwaService.GetByTitleAsync(title);
    }

    /// <summary>
    /// Fetches a single Manhwa by its id 
    /// </summary>
    /// <param name="id">id of the manhwa</param>
    /// <returns>Single Manhwa with the given id</returns>
    public async Task<Manhwa> ManhwaById(int id)
    {
        _logger.Info("ManhwaById request received");
        return await _manhwaService.GetByIdAsync(id);
    }

    /// <summary>
    /// Fetches a list of all Genres that any Manhwa can have.
    /// </summary>
    /// <returns>All genres</returns>
    public async Task<IEnumerable<Genre>> AllGenres()
    {
        _logger.Info("AllGenres request received");
        return await _genreService.GetAllAsync();
    }

    public async Task<IEnumerable<Tag>> AllTags()
    {
        _logger.Info("AllTags request received");
        return await _tagService.GetAllAsync();
    }

    public async Task<User> ValidateLogin(string email, string password)
    {
        return await _userService.ValidateUserAsync(email, password);
    }
}