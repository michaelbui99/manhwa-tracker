package io.github.michaelbui99.manhwatrackerapplicationserver.services;

import io.github.michaelbui99.manhwatrackerapplicationserver.model.manhwa.Manhwa;

import java.util.List;

public interface ManhwaService {
    List<Manhwa> getAll();
    Manhwa getById(int id);
    List<Manhwa> getByTitle(String title);
}
