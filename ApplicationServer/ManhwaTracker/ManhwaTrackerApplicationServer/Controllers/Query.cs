using ManhwaTrackerApplicationServer.Models.Manhwa;
using ManhwaTrackerApplicationServer.Services;

namespace ManhwaTrackerApplicationServer.Controllers;

public class Query
{
  private readonly IManhwaService _manhwaService;

  public Query(IManhwaService manhwaService)
  {
    _manhwaService = manhwaService;
  }

  /// <summary>
  /// Fetches all the registered Manhwas in the system
  /// </summary>
  /// <returns>All registered Manhwas</returns>
  public async Task<IEnumerable<Manhwa>> AllManhwas()
  {
      return await _manhwaService.GetAllAsync();
  }
}