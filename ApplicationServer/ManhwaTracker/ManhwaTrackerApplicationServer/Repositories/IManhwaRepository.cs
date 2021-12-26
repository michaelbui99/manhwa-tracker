using ManhwaTrackerApplicationServer.Models.Manhwa;

namespace ManhwaTrackerApplicationServer.Repositories;

public interface IManhwaRepository
{
   /// <summary>
   /// Fetches list of all <c>Manhwa</c> from data source
   /// </summary>
   /// <returns>All manhwa</returns>
   public Task<IEnumerable<Manhwa>> GetAllAsync();
   
   /// <summary>
   /// Fetches a single <c>Manhwa</c> by its <c>Id</c>
   /// </summary>
   /// <param name="id">id of the <c>Manhwa</c></param>
   /// <returns>Single Manhwa</returns>
   public Task<Manhwa> GetByIdAsync(int id);
   
   /// <summary>
   /// Fetches a list of <c>Manhwa</c> by title.
   /// </summary>
   /// <remarks>
   /// The list will consists of <c>Manhwa</c> where <c>title</c> is a substring of <c>Title</c>.
   /// The pattern matching is case insensitive.
   /// </remarks>
   /// <param name="title">title that will be used for generating the list of manhwas</param>
   /// <returns>All manhwa where Title contains the <c>title</c> param</returns>
   public Task<IEnumerable<Manhwa>> GetByTitleAsync(string title);
}