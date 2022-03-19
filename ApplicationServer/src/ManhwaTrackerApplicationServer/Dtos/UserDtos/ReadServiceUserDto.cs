namespace ManhwaTrackerApplicationServer.Dtos.UserDtos;

public class ReadServiceUserDto
{
    public string ServiceName { get; set; }
    public string Token { get; set; }

    public ReadServiceUserDto(string serviceName, string token)
    {
        ServiceName = serviceName;
        Token = token;
    }
}