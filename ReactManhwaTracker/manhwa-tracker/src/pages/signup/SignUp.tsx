import { Box, Center, Container, Heading } from "@chakra-ui/react";
import * as React from "react";

const SignUp = () => {
    return (
        <Box>
            <Center>
                <Box
                    width={{ base: "250px", md: "500px" }}
                    boxShadow="lg"
                    padding="1rem 2rem"
                    borderRadius="10px"
                    marginTop="5rem"
                >
                    <Center>
                        <Heading as="h2" size="lg">
                            Sign up
                        </Heading>
                    </Center>
                </Box>
            </Center>
        </Box>
    );
};

export default SignUp;
