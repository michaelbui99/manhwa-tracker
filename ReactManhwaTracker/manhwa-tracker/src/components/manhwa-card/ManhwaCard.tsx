import React, { useState } from "react";
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
import styles from "./ManhwaCard.module.scss";
export const ManhwaCard: React.FC<{ manhwa: Manhwa }> = ({ manhwa }) => {
  const [hover, setHover] = useState<boolean>(false);
  const handleHover = () => {
    setHover(true);
  };
  const handleHoverEnd = () => {
    setHover(false);
  };
  return (
    <div onMouseOver={handleHover} onMouseLeave={handleHoverEnd}>
      {hover ? <p>yes</p> : <p>no</p>}
      <Box
        boxShadow="base"
        width={{ base: "200px" }}
        height={{ base: "300px" }}
        borderRadius="10px"
        position="relative"
      >
        <Flex flexDir="column">
          <Heading as="h3" size="md" textAlign="center" padding="0.4rem 0">
            {manhwa.title}
          </Heading>
          <Image src={manhwa.coverImage} />
          <HStack>
            <Button variant="outline">Details</Button>
            <Button variant="outline">Add to list</Button>
          </HStack>
        </Flex>
        {hover ? (
          <Box
            width="300px"
            height="200px"
            position="absolute"
            right="-310px"
            top="0"
            boxShadow="base"
            borderRadius="10px"
            overflow="hidden"
            textOverflow="ellipsis"
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
