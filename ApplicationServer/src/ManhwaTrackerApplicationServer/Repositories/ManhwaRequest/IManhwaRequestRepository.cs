namespace ManhwaTrackerApplicationServer.Repositories.ManhwaRequest;
using ManhwaTrackerApplicationServer.Models.ManhwaRequest;

public interface IManhwaRequestRepository
{
    public Task<IEnumerable<ManhwaRequest>> GetAllAsync();
    public Task<ManhwaRequest> GetByIdAsync(int id);
    public Task<ManhwaRequest> CreateAsync(ManhwaRequest request);
    public Task DeleteAsync(int id);
    public Task<ManhwaRequest> UpdateAsync(int id, ManhwaRequest updatedRequest);
}