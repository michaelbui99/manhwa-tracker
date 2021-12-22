import { UserDAO } from "src/dataaccess/user/user-dao";
import { User } from "src/models/user/user";
import { UserService } from "./user-service";

export class UserServiceImpl implements UserService {
  userDAO: UserDAO;

  constructor(userDAO: UserDAO) {
    this.userDAO = userDAO;
  }

  async registerAsync(email: string, password: string): Promise<User> {
    const user = await this.userDAO.createAsync(email, password);
    return user;
  }
}
