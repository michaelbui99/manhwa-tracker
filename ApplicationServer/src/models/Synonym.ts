import { Field, ObjectType } from "type-graphql";
import { TitleLanguage } from "./TitleLanguage";
@ObjectType()
export class Synonym {
  @Field((type) => TitleLanguage)
  titleLangauge: TitleLanguage;
  @Field()
  title: string;
}
