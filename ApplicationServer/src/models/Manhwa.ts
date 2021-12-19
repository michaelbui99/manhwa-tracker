import { Status } from "./status";
import { SourceMaterial } from "./source-material";
import { Tag } from "./tag";
import { Genre } from "./genre";
import { Synonym } from "./synonym";
import { Field, ObjectType } from "type-graphql";
@ObjectType()
export default class Manhwa {
  @Field()
  id: number;
  @Field()
  title: string;
  @Field()
  description: string;
  @Field()
  format: string;
  @Field((type) => Status)
  status: Status;
  @Field((type) => SourceMaterial)
  sourceMaterial: SourceMaterial;
  @Field()
  releaseDate: Date;
  @Field()
  endDate: Date;
  @Field()
  chapterCount: number;
  @Field()
  coverImage: string;
  @Field((type) => [Tag])
  tags: Tag[];
  @Field((type) => [Genre])
  genres: Genre[];
  @Field((type) => [Synonym])
  synonyms: Synonym[];
  constructor({
    id,
    title,
    description,
    format,
    sourceMaterial,
    releaseDate,
    endDate,
    chapterCount,
    coverImage,
    tags,
    genres,
    synonyms,
  }: {
    id: number;
    title: string;
    description: string;
    format: string;
    sourceMaterial: SourceMaterial;
    releaseDate: Date;
    endDate: Date;
    chapterCount: number;
    coverImage: string;
    tags: Tag[];
    genres: Genre[];
    synonyms: Synonym[];
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.format = format;
    this.sourceMaterial = sourceMaterial;
    this.releaseDate = releaseDate;
    this.endDate = endDate;
    this.chapterCount = chapterCount;
    this.coverImage = coverImage;
    this.tags = tags;
    this.genres = genres;
    this.synonyms = synonyms;
  }
}
