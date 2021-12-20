import { Genre } from "src/models/genre";

export interface GenreService {
  getAllAsync(): Promise<Genre[]>;
}
