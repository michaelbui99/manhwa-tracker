import * as React from "react";
import { useState } from "react";
import {
  Box,
  Heading,
  Button,
  Flex,
  HStack,
  MenuItem,
  Menu,
  IconButton,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState<boolean>(false);
  const handleHamburgerClick = () => {
    setOpened(!opened);
  };
  return (
    <>
      {/* Desktop navbar */}
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

      {/* Mobile navbar */}
      <Box
        padding="1rem 2rem"
        bgColor="var(--main-bg-color)"
        color="white"
        display={{ base: "block", md: "none", lg: "none" }}
      >
        <HStack>
          <IconButton
            aria-label="Navigation"
            icon={<HamburgerIcon />}
            colorScheme="teal"
            onClick={handleHamburgerClick}
          />
          {opened ? (
            <Box height="calc(100vh - 1rem)">
              <Menu>
                <MenuItem minH="20px">
                  <Link to="/">Home</Link>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            ""
          )}
        </HStack>
      </Box>
    </>
  );
};
