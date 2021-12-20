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
import { Link } from "react-router-dom";
export const Navbar: React.FC = () => {
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
          <Button colorScheme="teal" size="sm">
            <Link to="/">Home</Link>
          </Button>
          <Button colorScheme="teal" size="sm">
            <Link to="/search">Browse</Link>
          </Button>
          <Button colorScheme="teal" size="sm">
            <Link to="/requestmanhwa">Request Manhwa</Link>
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};
