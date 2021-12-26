using ManhwaTrackerApplicationServer.Models.Manhwa;
using ManhwaTrackerApplicationServer.Services;
using ManhwaTrackerApplicationServer.Services.Genre;
using ManhwaTrackerApplicationServer.Services.Manhwa;

namespace ManhwaTrackerApplicationServer.Controllers;

public class Query
{
  private readonly IManhwaService _manhwaService;
  private readonly IGenreService _genreService;

  public Query(IManhwaService manhwaService, IGenreService genreService)
  {
    _manhwaService = manhwaService;
    _genreService = genreService;
  }

  /// <summary>
  /// Fetches all the registered Manhwas in the system
  /// </summary>
  /// <returns>All registered Manhwas</returns>
  public async Task<IEnumerable<Manhwa>> AllManhwas()
  {
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
      return await _manhwaService.GetByTitleAsync(title);
  }

   /// <summary>
   /// Fetches a single Manhwa by its id 
   /// </summary>
   /// <param name="id">id of the manhwa</param>
   /// <returns>Single Manhwa with the given id</returns>
   public async Task<Manhwa> ManhwaById(int id)
   {
       return await _manhwaService.GetByIdAsync(id);
   }

    /// <summary>
    /// Fetches a list of all Genres that any Manhwa can have.
    /// </summary>
    /// <returns>All genres</returns>
   public async Task<IEnumerable<Genre>> AllGenres()
   {
       return await _genreService.GetAllAsync();
   }
}