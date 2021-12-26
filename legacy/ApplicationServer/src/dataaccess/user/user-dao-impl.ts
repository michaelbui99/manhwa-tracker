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

  async getAllAsync(): Promise<User[]> {
    try {
      const { rows } = await this.connection.query("SELECT * FROM _USER");
      const allUsers = [];

      for (let i = 0; i < rows.length; i++) {
        const user = new User();
        user.id = rows[i].id;
        user.email = rows[i].email;
        user.password = rows[i].password;
        allUsers.push(user);
      }

      return allUsers;
    } catch (err) {
      console.log(err);
      throw err;
    }
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
