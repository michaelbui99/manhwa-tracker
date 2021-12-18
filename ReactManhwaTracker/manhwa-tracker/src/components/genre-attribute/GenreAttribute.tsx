import * as React from "react";
import { Box, Flex, Text, Badge } from "@chakra-ui/react";
import { Genre } from "../../models/Genre";

const GenreAttribute: React.FC<{ genre: Genre }> = ({ genre }) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Badge colorScheme="purple">{genre.name}</Badge>
    </Flex>
  );
};

export default GenreAttribute;
