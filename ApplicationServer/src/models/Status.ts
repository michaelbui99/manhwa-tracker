import { registerEnumType } from "type-graphql";

export enum Status {
  NOT_YET_RELEASED,
  RELEASING,
  FINISHED,
  HIATUS,
  CANCELLED,
}

registerEnumType(Status, {
  name: "Status",
  description: "The release status of the manhwa",
});
