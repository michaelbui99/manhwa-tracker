import * as React from "react";
import {
    Alert,
    Box,
    Button,
    Center,
    Heading,
    VStack,
    Text,
    Link,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import FormCard from "../../components/form-card/FormCard";
import IconFormInput from "../../components/icon-form-input/IconFormInput";
import { gql, useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/user";
import { setLists } from "../../reducers/manhwa-lists";
import { UserServiceImpl } from "../../data/user/user-service-impl";
import { UserService } from "../../data/user/user-service";
import { ManhwaListService } from "../../data/manhwa-list/manhwa-list-service";
import { ManhwaListServiceImpl } from "../../data/manhwa-list/manhwa-list-service-impl";

const Login: React.FC = () => {
    const client = useApolloClient();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userService: UserService = new UserServiceImpl();
    const manhwaListService: ManhwaListService = new ManhwaListServiceImpl();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleEmailInputChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setEmail(event.currentTarget.value);
    };

    const handlePasswordInputChange: React.ChangeEventHandler<
        HTMLInputElement
    > = (event) => {
        setPassword(event.currentTarget.value);
    };

    const loginUser = async () => {
        if (!email || !password) {
            setErrorMessage("All fields are required");
            return;
        }

        setErrorMessage("");
        setLoading(true);

        try {
            const loginResult = await userService.loginUser(email, password);

            console.log("Setting token");
            sessionStorage.setItem("token", `${loginResult.token}`);

            const userManhwaLists =
                await manhwaListService.getUserManhwaLists();

            dispatch(login({ email: email, isLoggedIn: true }));

            dispatch(setLists(userManhwaLists));

            navigate("/");
        } catch (error) {
            setErrorMessage("Something went wrong");
            console.log(error);
        }

        setLoading(false);
    };

    return (
        <FormCard>
            <Center>
                <Heading as="h2" size="lg" color="var(--main-bg-color)">
                    Login
                </Heading>
            </Center>
            <VStack spacing={6} marginTop="2rem">
                <IconFormInput
                    placeHolder="Email"
                    type="email"
                    onChange={handleEmailInputChange}
                    icon={<EmailIcon />}
                />

                <IconFormInput
                    placeHolder="Password"
                    type="password"
                    onChange={handlePasswordInputChange}
                    icon={<LockIcon />}
                />

                {errorMessage ? (
                    <Alert status="error">{errorMessage}</Alert>
                ) : (
                    ""
                )}

                <Box>
                    <Text fontSize="md" align="center" marginBottom="1rem">
                        Don't have an account yet?{" "}
                        <Link color="teal.500" href="/signup">
                            Register now
                        </Link>
                    </Text>
                    <Center>
                        {loading ? (
                            <Button isLoading></Button>
                        ) : (
                            <Button
                                variant="outline"
                                colorScheme="teal"
                                onClick={loginUser}
                            >
                                Login
                            </Button>
                        )}
                    </Center>
                </Box>
            </VStack>
        </FormCard>
    );
};

export default Login;
