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
}
