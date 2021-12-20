import { registerEnumType } from "type-graphql";

export enum TitleLanguage {
  EN = "EN",
  JP = "JP",
  KR = "KR",
  ZH = "ZH",
}

registerEnumType(TitleLanguage, {
  name: "TitleLanguage",
});
