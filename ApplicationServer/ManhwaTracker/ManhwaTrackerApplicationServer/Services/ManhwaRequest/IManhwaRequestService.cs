using ManhwaTrackerApplicationServer.Models.User;

namespace ManhwaTrackerApplicationServer.Services.ManhwaRequest;

using ManhwaTrackerApplicationServer.Models.ManhwaRequest;

public interface IManhwaRequestService
{
    
    public Task<IEnumerable<ManhwaRequest>> GetAllAsync();
    public Task<ManhwaRequest> GetByIdAsync(int id);
    public Task<ManhwaRequest> CreateAsync(ManhwaRequest request);
    public Task DeleteAsync(int id);
    public Task<ManhwaRequest> ApproveRequestAsync(int id, Moderator moderator);
    public Task<ManhwaRequest> RejectRequestAsync(int id, Moderator moderator);
    public Task<IEnumerable<ManhwaRequest>> GetAllApprovedAsync();
    public Task<IEnumerable<ManhwaRequest>> GetAllPendingAsync();
}