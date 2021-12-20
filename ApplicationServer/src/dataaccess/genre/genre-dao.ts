import { Genre } from "src/models/genre";

export interface GenreDAO {
  getAllAsync(): Promise<Genre[]>;
}
