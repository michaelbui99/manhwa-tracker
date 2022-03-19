using ManhwaTrackerApplicationServer.DataAccess;

namespace ManhwaTrackerApplicationServer.Repositories.User
{
    public class ServiceUserRepository : IServiceUserRepository
    {
        private readonly ManhwaTrackerDbContext _dbContext;

        public ServiceUserRepository(ManhwaTrackerDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public bool ValidateSecretAsync(string secret, string serviceName)
        {
            var existingService = _dbContext.ServiceUsers.FirstOrDefault(service =>
            service.ServiceName.ToLower() == serviceName.ToLower()
            && service.Secret == secret);
            
            if (existingService == null)
            {
                return false;
            }

            return true;
        }
    }
}
