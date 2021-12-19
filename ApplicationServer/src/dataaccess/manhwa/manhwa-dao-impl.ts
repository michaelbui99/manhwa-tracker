import { Pool, QueryResult } from "pg";
import { Genre } from "../models/genre";
import Manhwa from "../../models/manhwa";
import { BaseDAO } from "../base-dao";
import { ManhwaDAO } from "./manhwa-dao";
import { Tag } from "../models/tag";
import { Synonym } from "src/models/synonym";

export class ManhwaDAOImpl implements ManhwaDAO {
  async getAsync(id: number): Promise<Manhwa> {
    const baseDAO = new BaseDAO();
    const connection: Pool = baseDAO.getConnection();
    const { rows }: { rows: Manhwa[] } = await connection.query(
      "SELECT * FROM manhwa WHERE id = $1",
      [id]
    );
    const genres: QueryResult = await connection.query(
      "select * from genre join manhwa_genre mg on genre.id = mg.genre_id where manhwa_id = $1",
      [id]
    );
    const tags: QueryResult = await connection.query(
      "select * from _tag join manhwa_tag mt on _tag.id = mt.tag_id where manhwa_id = $1",
      [id]
    );
    const synonyms: QueryResult = await connection.query(
      "select * from synonym join manhwa_synonym ms on synonym.title = ms.synonym_title and synonym.title_language = ms.synonym_title_language where manhwa_id = $1",
      [id]
    );
    const fetchedManhwa = rows[0];
    const fetchedGenres: Genre[] = genres.rows;
    const fetchedTags: Tag[] = tags.rows;
    const fetchedSynonyms: Synonym[] = synonyms.rows;
    let manhwa = new Manhwa({
      id: fetchedManhwa.id,
      chapterCount: fetchedManhwa.id,
      coverImage: fetchedManhwa.coverImage,
      description: fetchedManhwa.description,
      endDate: fetchedManhwa.endDate,
      format: fetchedManhwa.format,
      sourceMaterial: fetchedManhwa.sourceMaterial,
      title: fetchedManhwa.title,
      genres: fetchedGenres,
      releaseDate: fetchedManhwa.releaseDate,
      synonyms: fetchedSynonyms,
      tags: fetchedTags,
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
}
