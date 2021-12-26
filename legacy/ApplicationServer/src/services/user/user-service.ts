import { User } from "src/models/user/user";

export default interface UserService {
    getAllAsync(): Promise<User[]>;
    /**
     * Registers a new user
     * @param email email of user, must contain @ and '.'. Cannot end with a .
     * @param password password of user, must be at least 8 characters
     * @throws If email or password is falsy
     * @throws If user with email already exists
     */
    registerAsync(email: string, password: string): Promise<User>;
}
