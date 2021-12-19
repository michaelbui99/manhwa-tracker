import { Status } from "./Status";
import { SourceMaterial } from "./SourceMaterial";
import { Tag } from "./Tag";
import { Genre } from "./Genre";
import { Synonym } from "./Synonym";
export default class Manhwa {
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
