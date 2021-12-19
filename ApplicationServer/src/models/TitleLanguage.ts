import { registerEnumType } from "type-graphql";

export enum TitleLanguage {
  EN,
  JP,
  KR,
  ZH,
}

registerEnumType(TitleLanguage, {
  name: "TitleLanguage",
});
