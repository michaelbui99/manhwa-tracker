namespace ManhwaTrackerApplicationServer.Services.Manhwa;

/// <summary>
/// Provides operations for fetching, creation, deletion and updating of Manhwa
/// </summary>
public interface IManhwaService
{
   /// <summary>
   /// Fetches a list of all <c>Manhwa</c> registered in the system
   /// </summary>
   /// <returns>All registered Manhwas</returns>
   public Task<IEnumerable<Models.Manhwa.Manhwa>> GetAllAsync();
   
   /// <summary>
   /// Fetches a single <c>Manhwa</c> by its <c>Id</c>
   /// </summary>
   /// <param name="id">id of the manhwa</param>
   /// <returns>Single Manhwa with the given id</returns>
   public Task<Models.Manhwa.Manhwa> GetByIdAsync(int id);
   
   /// <summary>
   /// Fetches a list of <c>Manhwa</c> by title.
   /// </summary>
   /// <remarks>
   /// The list will consists of <c>Manhwa</c> where <c>title</c> is a substring of <c>Title</c>.
   /// The pattern matching is case insensitive.
   /// </remarks>
   /// <param name="title">title that will be used for generating the list of manhwas</param>
   /// <returns>All manhwa where Title contains the <c>title</c> param</returns>
   public Task<IEnumerable<Models.Manhwa.Manhwa>> GetByTitleAsync(string title);

   public Task<Models.Manhwa.Manhwa> CreateAsync(Models.Manhwa.Manhwa manhwa);
}