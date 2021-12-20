import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbItem,
  Box,
  Heading,
  Button,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      padding="0.5rem 2rem"
      bgColor="var(--main-bg-color)"
      color="white"
      display={{ base: "none", md: "block", lg: "block" }}
    >
      <Flex flexDir="row" justifyContent="space-between">
        <Heading fontSize="20px">Manhwa Tracker</Heading>
        <HStack>
          <Button colorScheme="teal" size="sm" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            onClick={() => navigate("/search")}
          >
            Browse
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            onClick={() => navigate("/requestmanhwa")}
          >
            Request Manhwa
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};
