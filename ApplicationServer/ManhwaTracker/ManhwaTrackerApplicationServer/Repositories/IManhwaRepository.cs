using ManhwaTrackerApplicationServer.Models.Manhwa;

namespace ManhwaTrackerApplicationServer.Repositories;

public interface IManhwaRepository
{
   public Task<IEnumerable<Manhwa>> GetAllAsync();
   public Task<Manhwa> GetByIdAsync(int id);
   public Task<IEnumerable<Manhwa>> GetByTitleAsync();
}