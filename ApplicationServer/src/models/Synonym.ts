import { Field, ObjectType } from "type-graphql";
import { TitleLanguage } from "./title-language";
@ObjectType()
export class Synonym {
  @Field((type) => TitleLanguage)
  titleLangauge: TitleLanguage;
  @Field()
  title: string;
}
