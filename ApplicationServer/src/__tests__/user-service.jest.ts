import "reflect-metadata";
import UserService from "../services/user/user-service";
import UserServiceImpl from "../services/user/user-service-impl";
import { UserDAO } from "../dataaccess/user/user-dao";
import { UserDAOImpl } from "../dataaccess/user/user-dao-impl";
import { User } from "../models/user/user";

test("service should throw exception, when email is null", async () => {
    const mockedUserDAO = new UserDAOImpl();
    const userService = new UserServiceImpl(mockedUserDAO);
    const invalidEmail = null;

    try {
        await userService.registerAsync(invalidEmail, "test123123123");
        fail();
    } catch (err) {
        expect(err).toEqual("Email and password is required");
    }
});

test("service should throw exception, when password is null", async () => {
    const mockedUserDAO = new UserDAOImpl();
    const userService = new UserServiceImpl(mockedUserDAO);
    const invalidPassword = null;

    try {
        await userService.registerAsync("test@test.com", invalidPassword);
        fail();
    } catch (err) {
        expect(err).toEqual("Email and password is required");
    }
});
