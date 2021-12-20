import { registerEnumType } from "type-graphql";

export enum SourceMaterial {
  WEB_COMIC = "WEB_COMIC",
  LIGHT_NOVEL = "LIGHT_NOVEL",
  WEB_NOVEL = "WEB_NOVEL",
  ORIGINAL = "ORIGINAL",
}
registerEnumType(SourceMaterial, {
  name: "SourceMaterial",
  description: "Source material that the manhwa is adapting",
});
