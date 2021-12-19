import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Genre {
  @Field()
  id: number;
  @Field()
  name: string;
}
