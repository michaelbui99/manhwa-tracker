import { Pool, QueryResult } from "pg";
import { Genre } from "src/models/manhwa/genre";
import Manhwa from "../../models/manhwa/manhwa";
import { BaseDAO } from "../base-dao";
import { ManhwaDAO } from "./manhwa-dao";
import { Tag } from "src/models/manhwa/tag";
import { Synonym } from "src/models/manhwa/synonym";

export class ManhwaDAOImpl extends BaseDAO implements ManhwaDAO {
  private baseDAO: BaseDAO;
  private connection: Pool;

  constructor() {
    super();
    this.connection = getConnection();
  }

  async getAsync(id: number): Promise<Manhwa> {
    const { rows }: { rows: any[] } = await this.connection.query(
      "SELECT * FROM manhwa WHERE id = $1",
      [id]
    );
    const fetchedManhwa = rows[0];
    let manhwa = new Manhwa({
      id: fetchedManhwa.id,
      chapterCount: fetchedManhwa.id,
      coverImage: fetchedManhwa.coverimage,
      description: fetchedManhwa.description,
      endDate: fetchedManhwa.enddate,
      format: fetchedManhwa.format,
      sourceMaterial: fetchedManhwa.sourcematerial,
      title: fetchedManhwa.title,
      genres: await this.getGenresByManhwaId(fetchedManhwa.id),
      releaseDate: fetchedManhwa.releasedate,
      synonyms: await this.getSynonymsByManhwaId(fetchedManhwa.id),
      tags: await this.getTagsByManhwaId(fetchedManhwa.id),
      status: fetchedManhwa.status,
    });
    return manhwa;
  }
  async getAllAsync(): Promise<Manhwa[]> {
    let manhwas: Manhwa[] = [];
    const { rows }: { rows: any } = await this.connection.query(
      "SELECT * FROM manhwa"
    );
    const fetchedManhwas = rows;
    for (const r of fetchedManhwas) {
      const genres = await this.getGenresByManhwaId(r.id);
      const tags = await this.getTagsByManhwaId(r.id);
      const synonyms = await this.getSynonymsByManhwaId(r.id);
      let manhwa = new Manhwa({
        id: r.id,
        chapterCount: r.id,
        coverImage: r.coverimage,
        description: r.description,
        endDate: r.enddate,
        format: r.format,
        sourceMaterial: r.sourcematerial,
        title: r.title,
        genres: genres,
        releaseDate: r.releasedate,
        synonyms: synonyms,
        tags: tags,
        status: r.status,
      });
      manhwas.push(manhwa);
    }
    return manhwas;
  }
  createAsync(manhwa: Manhwa): Promise<Manhwa> {
    throw new Error("Method not implemented.");
  }
  deleteAsync(id: number): void {
    throw new Error("Method not implemented.");
  }

  private async getGenresByManhwaId(id: number): Promise<Genre[]> {
    const genres: QueryResult = await this.connection.query(
      "select * from genre join manhwa_genre mg on genre.id = mg.genreId where manhwaId = $1",
      [id]
    );
    return genres.rows;
  }

  private async getTagsByManhwaId(id: number): Promise<Tag[]> {
    const tags: QueryResult = await this.connection.query(
      "select * from _tag join manhwa_tag mt on _tag.id = mt.tagId where manhwaId = $1",
      [id]
    );
    return tags.rows;
  }

  private async getSynonymsByManhwaId(id: number): Promise<Synonym[]> {
    const synonyms: QueryResult = await this.connection.query(
      "select * from synonym join manhwa_synonym ms on synonym.title = ms.synonymTitle and synonym.titleLanguage = ms.synonymTitleLanguage where manhwaId = $1",
      [id]
    );
    return synonyms.rows;
  }
}
