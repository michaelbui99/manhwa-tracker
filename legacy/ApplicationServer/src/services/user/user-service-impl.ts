import { UserDAO } from "src/dataaccess/user/user-dao";
import { User } from "src/models/user/user";
import { UserService } from "./user-service";

export default class UserServiceImpl implements UserService {
    userDAO: UserDAO;

    constructor(userDAO: UserDAO) {
        this.userDAO = userDAO;
    }
    async getAllAsync(): Promise<User[]> {
        const allUsers = await this.userDAO.getAllAsync();
        return allUsers;
    }

    async registerAsync(email: string, password: string): Promise<User> {
        if (!email || !password) {
            throw "Email and password is required";
        }

        const allUsers = await this.getAllAsync();

        if (allUsers.some((user) => user.email === email)) {
            throw "Email has already been used";
        }

        if (password.length < 8) {
            throw "Password must be at least 8 characters";
        }

        const user = await this.userDAO.createAsync(email, password);
        return user;
    }
}
