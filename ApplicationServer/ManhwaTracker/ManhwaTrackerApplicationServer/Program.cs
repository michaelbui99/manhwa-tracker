using DotNetEnv;
using GraphQL.Server.Ui.Playground;
using ManhwaTrackerApplicationServer.Controllers;
using ManhwaTrackerApplicationServer.DataAccess;
using ManhwaTrackerApplicationServer.Repositories;
using ManhwaTrackerApplicationServer.Repositories.Genre;
using ManhwaTrackerApplicationServer.Repositories.Manhwa;
using ManhwaTrackerApplicationServer.Repositories.Tag;
using ManhwaTrackerApplicationServer.Services;
using ManhwaTrackerApplicationServer.Services.Genre;
using ManhwaTrackerApplicationServer.Services.Manhwa;
using ManhwaTrackerApplicationServer.Services.Tag;
using Microsoft.EntityFrameworkCore;

DotNetEnv.Env.Load();

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// TODO: Add Mutation type when at least one mutation has been defined
builder.Services.AddGraphQLServer().AddQueryType<Query>()
    .ModifyRequestOptions(opt => opt.IncludeExceptionDetails = true);
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder => { builder.WithOrigins(Env.GetString("WEBAPP_IP")); });
});
builder.Services.AddScoped<IManhwaService, ManhwaService>();
builder.Services.AddSingleton<ManhwaTrackerDbContext>();
builder.Services.AddScoped<IManhwaRepository, ManhwaRepository>();
builder.Services.AddScoped<IGenreRepository, GenreRepository>();
builder.Services.AddScoped<IGenreService, GenreService>();
builder.Services.AddScoped<ITagRepository, TagRepository>();
builder.Services.AddScoped<ITagService, TagService>();

builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // app.UseSwagger();
    // app.UseSwaggerUI();
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