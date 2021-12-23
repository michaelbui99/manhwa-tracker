using ManhwaTrackerApplicationServer.Controllers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddGraphQLServer().AddQueryType<Query>().AddMutationType<Mutation>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // app.UseSwagger();
    // app.UseSwaggerUI();
}

app.UseRouting().UseEndpoints(endpoints =>
{
    endpoints.MapGraphQL();
    endpoints.MapGraphQLPlayground();
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseGraphQLPlayground();

// app.MapControllers();

app.Run();