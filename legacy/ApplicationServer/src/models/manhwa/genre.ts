import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Genre {
  @Field()
  id: number;
  @Field()
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
