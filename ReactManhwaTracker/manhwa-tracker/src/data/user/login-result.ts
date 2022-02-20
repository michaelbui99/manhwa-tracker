import { User } from "../../models/user/user";

export class LoginResult {
    user: User;
    token: string;

    /**
     *
     */
    constructor(user: User, token: string) {
        this.user = user;
        this.token = token;
    }
}
