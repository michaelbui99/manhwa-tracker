import { User } from "../../models/user/user";
import { BaseService } from "../base-service";
import { LoginResult } from "./login-result";
import { UserService } from "./user-service";

export class UserServiceImpl extends BaseService implements UserService {
    constructor() {
        super();
    }

    async loginUser(email: string, password: string): Promise<LoginResult> {
        const loginDTO = {
            email: email,
            password: password,
        };

        const requestHeaders = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
            ...this.getAuthorizationHeader(),
        });

        const res = await fetch(`${this.baseUri}/login`, {
            headers: requestHeaders,
            method: "POST",
            body: JSON.stringify(loginDTO),
        });

        const data = await res.json();
        const user = new User(data.id, data.email, data.password);
        const token = data.token;

        const loginResult = new LoginResult(user, token);
        return loginResult;
    }
}
