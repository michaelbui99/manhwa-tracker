import { Pool } from "pg";
import { User } from "../../models/user/user";
import { BaseDAO } from "../base-dao";
import { UserDAO } from "./user-dao";

export class UserDAOImpl extends BaseDAO implements UserDAO {
  connection: Pool;

  constructor() {
    super();
    this.connection = this.getConnection();
  }

  async createAsync(email: string, password: string): Promise<User> {
    try {
      const { rows } = await this.connection.query(
        "INSERT INTO _user(email, password) VALUES ($1, $2)",
        [email, password]
      );

      const newUser = new User();
      newUser.email = email;
      newUser.password = password;
      return newUser;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
