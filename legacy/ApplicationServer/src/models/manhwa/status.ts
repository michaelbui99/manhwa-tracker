import { registerEnumType } from "type-graphql";

export enum Status {
  NOT_YET_RELEASED = "NOT_YET_RELEASED",
  RELEASING = "RELEASING",
  FINISHED = "FINISHED",
  HIATUS = "HIATUS",
  CANCELLED = "CANCELLED",
}

registerEnumType(Status, {
  name: "Status",
  description: "The release status of the manhwa",
});
