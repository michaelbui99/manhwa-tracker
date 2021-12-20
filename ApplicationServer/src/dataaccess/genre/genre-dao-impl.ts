import { Pool } from "pg";
import { Genre } from "src/models/genre";
import { BaseDAO } from "../base-dao";
import { GenreDAO } from "./genre-dao";

export class GenreDAOImpl implements GenreDAO {
  baseDAO: BaseDAO;
  connection: Pool;
  constructor() {
    this.baseDAO = new BaseDAO();
    this.connection = this.baseDAO.getConnection();
  }
  async getAllAsync(): Promise<Genre[]> {
    const { rows } = await this.connection.query("SELECT * FROM genre ");
    const genres: Genre[] = [];
    for (const row in rows) {
      let genre = new Genre();
      genre.id = row.id;
      genre.name = row.name;
      genres.push(genre);
    }
    return genres;
  }
}
