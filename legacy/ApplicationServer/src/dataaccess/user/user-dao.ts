import { User } from "src/models/user/user";

export interface UserDAO {
  getAllAsync(): Promise<User[]>;
  createAsync(email: string, password: string): Promise<User>;
}
