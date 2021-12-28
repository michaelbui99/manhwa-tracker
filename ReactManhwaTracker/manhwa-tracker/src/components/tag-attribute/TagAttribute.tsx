import * as React from "react";
import { Box, Flex, Text, Badge } from "@chakra-ui/react";
import { Tag } from "../../models/manhwa/tag";

const TagAttribute: React.FC<{ tag: Tag }> = ({ tag }) => {
    return (
        <Flex justifyContent="center" alignItems="center">
            <Badge colorScheme="pink">{tag.name}</Badge>
        </Flex>
    );
};

export default TagAttribute;
