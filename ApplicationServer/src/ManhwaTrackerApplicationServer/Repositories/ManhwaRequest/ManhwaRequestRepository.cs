using ManhwaTrackerApplicationServer.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace ManhwaTrackerApplicationServer.Repositories.ManhwaRequest;

public class ManhwaRequestRepository : IManhwaRequestRepository
{
    private readonly ManhwaTrackerDbContext _dbContext;

    public ManhwaRequestRepository(ManhwaTrackerDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    public async Task<IEnumerable<Models.ManhwaRequest.ManhwaRequest>> GetAllAsync()
    {
        var requests = await _dbContext.ManhwaRequests.ToListAsync();
        return requests;
    }

    public async Task<Models.ManhwaRequest.ManhwaRequest> GetByIdAsync(int id)
    {
        var request = await _dbContext.ManhwaRequests.FirstOrDefaultAsync(request => request.Id == id);
        return request;
    }

    public async Task<Models.ManhwaRequest.ManhwaRequest> CreateAsync(Models.ManhwaRequest.ManhwaRequest request)
    {
        var createdRequest = (await _dbContext.ManhwaRequests.AddAsync(request)).Entity;
        await _dbContext.SaveChangesAsync();
        return createdRequest;
    }

    public async Task DeleteAsync(int id)
    {
        var requestToBeDeleted = await _dbContext.ManhwaRequests.FirstOrDefaultAsync(request => request.Id == id);
        _dbContext.ManhwaRequests.Remove(requestToBeDeleted);
    }

    public async Task<Models.ManhwaRequest.ManhwaRequest> UpdateAsync(int id, Models.ManhwaRequest.ManhwaRequest updatedRequest)
    {
        var existingRequest = await _dbContext.ManhwaRequests.FirstOrDefaultAsync(request => request.Id == id);
        existingRequest.Id = updatedRequest.Id;
        existingRequest.ApprovedBy = updatedRequest.ApprovedBy;
        existingRequest.RequestStatus = updatedRequest.RequestStatus;
        await _dbContext.SaveChangesAsync();
        return existingRequest;
    }
}