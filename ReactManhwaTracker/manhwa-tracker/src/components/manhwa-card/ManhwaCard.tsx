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
} from "@chakra-ui/react";
import Manhwa from "../../models/Manhwa";
import GenreAttribute from "../genre-attribute/GenreAttribute";
import styles from "./ManhwaCard.module.scss";
export const ManhwaCard: React.FC<{ manhwa: Manhwa }> = ({ manhwa }) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState<boolean>(false);
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
      >
        <Flex flexDir="column" cursor="pointer">
          <Box
            cursor="pointer"
            transition="all 0.3s ease-in-out"
            _hover={{ opacity: 0.7 }}
            onClick={() => navigate(`/manhwa/${manhwa.id}`)}
          >
            <Heading as="h3" size="md" textAlign="center" padding="0.4rem 0">
              {manhwa.title}
            </Heading>
            <Image src={manhwa.coverImage} />
          </Box>
          {/* Displays 2 genres at max */}
          {manhwa.genres.length >= 2 ? (
            <HStack>
              <GenreAttribute genre={manhwa.genres[0]} />{" "}
              <GenreAttribute genre={manhwa.genres[1]} />
            </HStack>
          ) : manhwa.genres.length === 1 ? (
            <HStack>
              <GenreAttribute genre={manhwa.genres[0]} />
            </HStack>
          ) : (
            ""
          )}
          <HStack>
            <Button variant="outline">Add to list</Button>
          </HStack>
        </Flex>
        {/* Description shown on hover */}
        {hover ? (
          <Box
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
          >
            <Text textOverflow="ellipsis">{manhwa.description}</Text>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </div>
  );
};
