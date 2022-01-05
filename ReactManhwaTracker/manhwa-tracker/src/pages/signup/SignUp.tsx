import {
    Box,
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

const SignUp = () => {
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
                            onChange={() => null}
                            icon={<EmailIcon />}
                        />

                        <IconFormInput
                            placeHolder="Password"
                            type="password"
                            onChange={() => null}
                            icon={<LockIcon />}
                        />

                        <IconFormInput
                            placeHolder="Confirm password"
                            type="password"
                            onChange={() => null}
                            icon={<LockIcon />}
                        />
                    </VStack>
                </Box>
            </Center>
        </Box>
    );
};

export default SignUp;
