import React, { useState } from "react";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
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
      >
        <Flex flexDir="column">
          <Heading as="h3" size="md" textAlign="center" padding="0.4rem 0">
            {manhwa.title}
          </Heading>
          <Image src={manhwa.coverImage} />
        </Flex>
      </Box>
    </div>
  );
};
