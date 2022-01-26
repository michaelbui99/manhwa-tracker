FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /app

# Restore dependencies
RUN dotnet tool install --global dotnet-ef
COPY *.csproj ./
RUN dotnet restore

RUN dotnet ef database update

# Build binary
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image and provide entry point
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build-env /app/out . 
ENTRYPOINT [ "dotnet", "ManhwaTrackerApplicationServer.ddl" ]
