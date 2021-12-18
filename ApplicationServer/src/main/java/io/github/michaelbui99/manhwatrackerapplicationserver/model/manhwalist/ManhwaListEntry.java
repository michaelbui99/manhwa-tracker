package io.github.michaelbui99.manhwatrackerapplicationserver.model.manhwalist;

import io.github.michaelbui99.manhwatrackerapplicationserver.model.manhwa.Manhwa;

public class ManhwaListEntry {
    private int id;
    private Manhwa entry;

    public ManhwaListEntry(int id, Manhwa entry) {
        this.id = id;
        this.entry = entry;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Manhwa getEntry() {
        return entry;
    }

    public void setEntry(Manhwa entry) {
        this.entry = entry;
    }
}
