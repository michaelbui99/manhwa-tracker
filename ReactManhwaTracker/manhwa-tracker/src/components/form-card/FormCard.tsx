import * as React from "react";
import { Box, Center } from "@chakra-ui/react";

const FormCard: React.FC = ({ children }) => {
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
                    {children}
                </Box>
            </Center>
        </Box>
    );
};

export default FormCard;
