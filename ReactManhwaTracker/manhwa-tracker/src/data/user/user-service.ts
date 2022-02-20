import { LoginResult } from "./login-result";

export interface UserService {
    loginUser: (email: string, password: string) => Promise<LoginResult>;
}
