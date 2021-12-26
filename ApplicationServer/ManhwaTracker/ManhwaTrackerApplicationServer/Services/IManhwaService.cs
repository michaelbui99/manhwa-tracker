using ManhwaTrackerApplicationServer.Models.Manhwa;

namespace ManhwaTrackerApplicationServer.Services;

public interface IManhwaService
{
   /// <summary>
   /// Fetches all the registered Manhwas in the system.
   /// </summary>
   /// <returns>All registered Manhwas</returns>
   public Task<IEnumerable<Manhwa>> GetAllAsync();
   public Task<Manhwa> GetByIdAsync(int id);
   public Task<IEnumerable<Manhwa>> GetByTitleAsync(string title);
}