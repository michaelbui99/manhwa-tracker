using DotNetEnv;
using GraphQL.Server.Ui.Playground;
using ManhwaTrackerApplicationServer.Controllers;
using ManhwaTrackerApplicationServer.DataAccess;
using ManhwaTrackerApplicationServer.Repositories.Genre;
using ManhwaTrackerApplicationServer.Repositories.Manhwa;
using ManhwaTrackerApplicationServer.Repositories.Tag;
using ManhwaTrackerApplicationServer.Repositories.User;
using ManhwaTrackerApplicationServer.Services;
using ManhwaTrackerApplicationServer.Services.Genre;
using ManhwaTrackerApplicationServer.Services.Manhwa;
using ManhwaTrackerApplicationServer.Services.Tag;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

DotNetEnv.Env.Load();

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder => { builder.WithOrigins(Env.GetString("WEBAPP_IP")); });
});
builder.Services.AddScoped<IManhwaService, ManhwaService>();
builder.Services.AddTransient<ManhwaTrackerDbContext>();
builder.Services.AddScoped<IManhwaRepository, ManhwaRepository>();
builder.Services.AddScoped<IGenreRepository, GenreRepository>();
builder.Services.AddScoped<IGenreService, GenreService>();
builder.Services.AddScoped<ITagRepository, TagRepository>();
builder.Services.AddScoped<ITagService, TagService>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<Query>();
builder.Services.AddScoped<Mutation>();

// TODO: Add Mutation type when at least one mutation has been defined
if (!Env.GetBool("production"))
{
    builder.Services.AddGraphQLServer().AddQueryType<Query>().AddMutationType<Mutation>()
        .ModifyRequestOptions(opt => opt.IncludeExceptionDetails = true);
}
else
{
    builder.Services.AddGraphQLServer().AddQueryType<Query>().AddMutationType<Mutation>()
        .ModifyRequestOptions(opt => opt.IncludeExceptionDetails = false);
}

builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
}

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000"));

app.UseRouting().UseEndpoints(endpoints =>
{
    endpoints.MapGraphQL();
    endpoints.MapGraphQLPlayground();
});

app.UseHttpsRedirection();


app.UseAuthorization();


app.UseGraphQLPlayground(new PlaygroundOptions()
{
    GraphQLEndPoint = "/graphql"
}, "/graphql-ui");

// app.MapControllers();

app.Run();