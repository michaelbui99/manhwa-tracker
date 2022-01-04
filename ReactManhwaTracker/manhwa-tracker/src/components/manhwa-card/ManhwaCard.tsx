import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Flex,
    Heading,
    Image,
    HStack,
    Button,
    Text,
    Container,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Manhwa from "../../models/manhwa/manhwa";
import GenreAttribute from "../genre-attribute/GenreAttribute";
import styles from "./ManhwaCard.module.scss";

export const ManhwaCard: React.FC<{ manhwa: Manhwa }> = ({ manhwa }) => {
    const [hover, setHover] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleHover = () => {
        setHover(true);
    };

    const handleHoverEnd = () => {
        setHover(false);
    };

    return (
        <div onMouseOver={handleHover} onMouseLeave={handleHoverEnd}>
            <Box
                boxShadow="lg"
                width={{ base: "200px" }}
                height={{ base: "300px" }}
                borderRadius="10px"
                position="relative"
                backgroundColor="white"
            >
                <Flex flexDir="column" cursor="pointer">
                    <Box
                        cursor="pointer"
                        transition="all 0.3s ease-in-out"
                        _hover={{ opacity: 0.7 }}
                        onClick={() => navigate(`/manhwa/${manhwa.id}`)}
                        backgroundColor="white"
                        borderRadius="10px"
                    >
                        <Heading
                            as="h3"
                            size="md"
                            textAlign="center"
                            padding="0.4rem 0"
                        >
                            {manhwa.title}
                        </Heading>

                        <Image src={manhwa.coverImage} />
                    </Box>

                    {/* Genres. Displays 2 genres at max */}
                    {manhwa.genres.length >= 2 ? (
                        <HStack backgroundColor="white" padding="0 0.3rem">
                            <GenreAttribute genre={manhwa.genres[0]} />{" "}
                            <GenreAttribute genre={manhwa.genres[1]} />
                        </HStack>
                    ) : manhwa.genres.length === 1 ? (
                        <HStack backgroundColor="white">
                            <GenreAttribute genre={manhwa.genres[0]} />
                        </HStack>
                    ) : (
                        ""
                    )}
                    <HStack
                        backgroundColor="white"
                        borderRadius="10px"
                        padding="0 0.3rem"
                        paddingBottom="1rem"
                    >
                        <Button
                            variant="outline"
                            backgroundColor="white"
                            marginTop="0.5rem"
                        >
                            Add to list
                        </Button>
                    </HStack>
                </Flex>

                {/* Description shown on hover */}
                {hover ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <Container
                            width="300px"
                            height="200px"
                            position="absolute"
                            right="-310px"
                            top="0"
                            boxShadow="lg"
                            borderRadius="10px"
                            overflow="hidden"
                            textOverflow="ellipsis"
                            visibility={{ base: "hidden", md: "visible" }}
                            backgroundColor="white"
                        >
                            <Text textOverflow="ellipsis">
                                {manhwa.description}
                            </Text>
                        </Container>
                    </motion.div>
                ) : (
                    ""
                )}
            </Box>
        </div>
    );
};
