import { Genre } from "src/models/manhwa/genre";

export interface GenreService {
  getAllAsync(): Promise<Genre[]>;
}
