import { User } from "../models/user/user";
import { Arg, Mutation, Resolver } from "type-graphql";
import { UserService } from "../services/user/user-service";
import { ServiceFactory } from "../factories/service-factory";
import { hash } from "bcryptjs";

@Resolver((of) => User)
export class UserResolver {
  userService: UserService = ServiceFactory.getUserService();

  @Mutation(() => Boolean)
  async register(
    @Arg("email", () => String) email: string,
    @Arg("password", () => String) password: string
  ) {
    try {
      const hashedPassword = await hash(password, 12);
      const user = await this.userService.registerAsync(email, hashedPassword);

      if (user) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
