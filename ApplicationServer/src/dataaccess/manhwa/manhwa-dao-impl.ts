import { Pool, QueryResult } from "pg";
import { Genre } from "../models/genre";
import Manhwa from "../../models/manhwa";
import { BaseDAO } from "../base-dao";
import { ManhwaDAO } from "./manhwa-dao";
import { Tag } from "../models/tag";
import { Synonym } from "src/models/synonym";

export class ManhwaDAOImpl implements ManhwaDAO {
  private baseDAO: BaseDAO;
  private connection: Pool;

  constructor() {
    this.baseDAO = new BaseDAO();
    this.connection = this.baseDAO.getConnection();
  }

  async getAsync(id: number): Promise<Manhwa> {
    const { rows }: { rows: Manhwa[] } = await this.connection.query(
      "SELECT * FROM manhwa WHERE id = $1",
      [id]
    );
    const fetchedManhwa = rows[0];
    let manhwa = new Manhwa({
      id: fetchedManhwa.id,
      chapterCount: fetchedManhwa.id,
      coverImage: fetchedManhwa.coverImage,
      description: fetchedManhwa.description,
      endDate: fetchedManhwa.endDate,
      format: fetchedManhwa.format,
      sourceMaterial: fetchedManhwa.sourceMaterial,
      title: fetchedManhwa.title,
      genres: await this.getGenresByManhwaId(fetchedManhwa.id),
      releaseDate: fetchedManhwa.releaseDate,
      synonyms: await this.getSynonymsByManhwaId(fetchedManhwa.id),
      tags: await this.getTagsByManhwaId(fetchedManhwa.id),
    });
    return manhwa;
  }
  getAllAsync(): Promise<Manhwa[]> {
    throw new Error("Method not implemented.");
  }
  createAsync(manhwa: Manhwa): Promise<Manhwa> {
    throw new Error("Method not implemented.");
  }
  deleteAsync(id: number): void {
    throw new Error("Method not implemented.");
  }

  private async getGenresByManhwaId(id: number): Promise<Genre[]> {
    const genres: QueryResult = await this.connection.query(
      "select * from genre join manhwa_genre mg on genre.id = mg.genre_id where manhwa_id = $1",
      [id]
    );
    return genres.rows;
  }

  private async getTagsByManhwaId(id: number): Promise<Tag[]> {
    const tags: QueryResult = await this.connection.query(
      "select * from _tag join manhwa_tag mt on _tag.id = mt.tag_id where manhwa_id = $1",
      [id]
    );
    return tags.rows;
  }

  private async getSynonymsByManhwaId(id: number): Promise<Synonym[]> {
    const synonyms: QueryResult = await this.connection.query(
      "select * from synonym join manhwa_synonym ms on synonym.title = ms.synonym_title and synonym.title_language = ms.synonym_title_language where manhwa_id = $1",
      [id]
    );
    return synonyms.rows;
  }
}
