import * as React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Genre } from "../../models/Genre";

const GenreAttribute: React.FC<{ genre: Genre }> = ({ genre }) => {
  return (
    <Box
      maxHeight="30px"
      maxWidth="6rem"
      bgColor="var(--main-bg-color)"
      color="white"
      textAlign="center"
      padding="5px 20px"
      borderRadius="10px"
    >
      <Flex justifyContent="center" alignItems="center">
        <Text fontSize="xs" fontWeight="bold" cursor="default">
          {genre.name}
        </Text>
      </Flex>
    </Box>
  );
};

export default GenreAttribute;
