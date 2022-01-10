import {
    Alert,
    Box,
    Button,
    Center,
    FormControl,
    FormHelperText,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    VStack,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import * as React from "react";
import IconFormInput from "../../components/icon-form-input/IconFormInput";
import { gql, useApolloClient } from "@apollo/client";

const SignUp = () => {
    const client = useApolloClient();
    const REGISTER_USER_QUERY = gql`
        mutation ($userEmail: String!, $userPassword: String!) {
            registerUser(email: $userEmail, password: $userPassword) {
                id
                email
                password
            }
        }
    `;

    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [passwordConfirmation, setPasswordConfirmation] =
        React.useState<string>("");
    const [loading, setLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState<string>("");

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

    const handlePasswordConfirmationInputChange: React.ChangeEventHandler<
        HTMLInputElement
    > = (event) => {
        setPasswordConfirmation(event.currentTarget.value);
    };

    const registerUser = async () => {
        console.log(`${password}, ${passwordConfirmation}`);
        if (password !== passwordConfirmation) {
            setErrorMessage("Password does not match");
            return;
        }

        if (!email) {
            setErrorMessage("All fields are required");
            return;
        }

        if (!password) {
            setErrorMessage("All fields are required");
            return;
        }

        if (!passwordConfirmation) {
            setErrorMessage("All fields are required");
            return;
        }

        if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters");
            return;
        }

        setErrorMessage("");

        setLoading(true);

        try {
            const response = await client.mutate({
                mutation: REGISTER_USER_QUERY,
                variables: { userEmail: email, userPassword: password },
            });
            console.log(response);
        } catch (error) {
            setErrorMessage("Something went wrong");
            console.log(error);
        }

        setLoading(false);
    };

    return (
        <Box className="content">
            <Center>
                <Box
                    width={{ base: "250px", md: "500px" }}
                    boxShadow="lg"
                    padding="1rem 2rem"
                    borderRadius="10px"
                    backgroundColor="white"
                >
                    <Center>
                        <Heading as="h2" size="lg" color="var(--main-bg-color)">
                            Sign up
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

                        <IconFormInput
                            placeHolder="Confirm password"
                            type="password"
                            onChange={handlePasswordConfirmationInputChange}
                            icon={<LockIcon />}
                        />

                        {errorMessage ? (
                            <Alert status="error">{errorMessage}</Alert>
                        ) : (
                            ""
                        )}

                        <Box>
                            {loading ? (
                                <Button isLoading></Button>
                            ) : (
                                <Button
                                    variant="outline"
                                    colorScheme="teal"
                                    onClick={registerUser}
                                >
                                    Sign up
                                </Button>
                            )}
                        </Box>
                    </VStack>
                </Box>
            </Center>
        </Box>
    );
};

export default SignUp;
