import { User } from "src/models/user/user";

export interface UserDAO {
  createAsync(email: string, password: string): Promise<User>;
}
