import { Pool } from "pg";
import { Genre } from "../../models/genre";
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
    for (let i = 0; i < rows.length; i++) {
      console.log(rows[i]);
      const genre = new Genre(rows[i].id, rows[i].name);
      genres.push(genre);
    }
    return genres;
  }
}