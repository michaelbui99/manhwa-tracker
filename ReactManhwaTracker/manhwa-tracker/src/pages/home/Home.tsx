import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    VStack,
    Text,
} from "@chakra-ui/react";
import { UserServiceImpl } from "../../data/user/user-service-impl";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const user = useSelector((state: any) => state.user.value);

    React.useEffect(() => {
        if (user.isLoggedIn) {
            navigate("/search");
        }
    }, []);

    return (
        <Box height="100%" width="100%" backgroundColor="var(--main-bg-color)">
            <div className="content">
                <Box className="content">
                    <VStack>
                        <Grid
                            templateColumns={{
                                base: "repeat(1, 1fr)",
                                md: "repeat(2, 1fr)",
                            }}
                        >
                            <GridItem>
                                <Flex
                                    justifyContent="flex-start"
                                    direction="column"
                                    paddingBottom="3rem"
                                >
                                    <Heading as="h2" color="white">
                                        Are you finding it difficult to keep
                                        track of which Manhwas you have read or
                                        are currently reading?
                                    </Heading>
                                    <Text color="white" marginTop="1rem">
                                        Manhwa Tracker is a tool that let's you
                                        discover and track Manhwas.
                                    </Text>
                                    <Button
                                        marginTop="1.5rem"
                                        colorScheme="teal"
                                        onClick={() => navigate("/signup")}
                                    >
                                        Sign up today!
                                    </Button>
                                </Flex>
                            </GridItem>
                            <GridItem></GridItem>
                        </Grid>
                    </VStack>
                </Box>
            </div>
        </Box>
    );
};

export default Home;
