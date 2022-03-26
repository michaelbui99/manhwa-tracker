import { Status } from "./status";
import { SourceMaterial } from "./source-material";
import { Tag } from "./tag";
import { Genre } from "./genre";
import { Synonym } from "./synonym";
export default interface Manhwa {
    id: number;
    title: string;
    description: string;
    format: string;
    status: Status;
    sourceMaterial: SourceMaterial;
    releaseDate: Date;
    endDate: Date;
    chapterCount: number;
    coverImage: string;
    tags: Tag[];
    genres: Genre[];
    synonyms: Synonym[];
}
