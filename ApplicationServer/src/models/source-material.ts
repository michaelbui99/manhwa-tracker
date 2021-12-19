import { registerEnumType } from "type-graphql";

export enum SourceMaterial {
  WEB_COMIC,
  LIGHT_NOVEL,
  WEB_NOVEL,
  ORIGINAL,
}
registerEnumType(SourceMaterial, {
  name: "SourceMaterial",
  description: "Source material that the manhwa is adapting",
});
