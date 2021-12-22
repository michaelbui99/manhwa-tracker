import { User } from "src/models/user/user";

export interface UserService {
  getAllAsync(): Promise<User[]>;
  registerAsync(email: string, password: string): Promise<User>;
}
