namespace ManhwaTrackerApplicationServer.Models.ThirdParty
{
    using ManhwaTrackerApplicationServer.Models.User;
    using System.ComponentModel.DataAnnotations;

    public class ServiceUser
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Secret { get; set; }
        [Required]
        public string ServiceName { get; set; }
        public string? Token { get; set; }

        public ServiceUser(string secret, string serviceName)
        {
            this.Secret = secret;
            this.ServiceName = serviceName;
        }
    }
}
