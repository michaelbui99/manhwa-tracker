namespace ManhwaTrackerApplicationServer.Repositories.User
{
    public interface IServiceUserRepository
    {
        public bool ValidateSecretAsync(string secret, string serviceName);
    }
}
