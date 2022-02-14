namespace ManhwaTrackerApplicationServer.Dtos
{
    public class ValidateUserDto
    {
        public string Email { get; set; }
        public string Password { get; set; }

        public ValidateUserDto(string email, string password)
        {
            Email = email;
            Password = password;
        }
    }
}
