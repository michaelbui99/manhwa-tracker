namespace ManhwaTrackerApplicationServer.Repositories.Manhwa;

public interface IManhwaRepository
{
   /// <summary>
   /// Fetches list of all <c>Manhwa</c> from data source
   /// </summary>
   /// <returns>All manhwa</returns>
   public Task<IEnumerable<Models.Manhwa.Manhwa>> GetAllAsync();
   
   /// <summary>
   /// Fetches a single <c>Manhwa</c> by its <c>Id</c>
   /// </summary>
   /// <param name="id">id of the <c>Manhwa</c></param>
   /// <returns>Single Manhwa</returns>
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

   /// <summary>
   /// Registers a new Manhwa in the system. 
   /// </summary>
   /// <param name="manhwa">the Manhwa to be created</param>
   /// <returns>The created Manhwa</returns>
   public Task<Models.Manhwa.Manhwa> CreateAsync(Models.Manhwa.Manhwa manhwa);
}