import * as React from "react";
import { useState, useRef } from "react";
import {
    Box,
    Heading,
    Button,
    Flex,
    HStack,
    MenuItem,
    Menu,
    IconButton,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    DrawerCloseButton,
    Text,
    VStack,
    Center,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerIcon, AddIcon } from "@chakra-ui/icons";
import { NavButton } from "../nav-button/NavButton";

//TODO: Find a way to get navbar to rerender, when user logs in
interface NavbarProps {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    email: string;
}

export const Navbar: React.FC<NavbarProps> = ({
    isLoggedIn,
    setIsLoggedIn,
    email,
}) => {
    const navigate = useNavigate();
    const btnRef = useRef();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [opened, setOpened] = useState<boolean>(false);

    const handleHamburgerClick = () => {
        setOpened(!opened);
    };

    React.useEffect(() => {}, [isLoggedIn]);

    const logout = () => {
        sessionStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/");
    };

    return (
        <>
            {/* Desktop navbar */}
            <Box
                padding="0.5rem 2rem"
                bgColor="var(--main-bg-color)"
                color="white"
                display={{ base: "none", md: "block", lg: "block" }}
                position="sticky"
                top="0"
                zIndex="2"
            >
                <Flex flexDir="row" justifyContent="space-between">
                    <Heading
                        fontSize="20px"
                        onClick={() => navigate("/")}
                        cursor="pointer"
                    >
                        Manhwa Tracker
                    </Heading>
                    <p>{email}</p>

                    {/* DEBUGGING ONLY */}
                    {isLoggedIn ? <p>Is Logged in</p> : <p>Not logged in</p>}

                    <HStack>
                        <NavButton
                            onClick={() => navigate("/")}
                            labelText="Home"
                        />

                        <NavButton
                            onClick={() => navigate("/search")}
                            labelText="Browse"
                        />

                        <NavButton
                            onClick={() => navigate("/requestmanhwa")}
                            labelText="Request Manhwa"
                        />

                        {!isLoggedIn ? (
                            <NavButton
                                onClick={() => navigate("/login")}
                                labelText="Login"
                            />
                        ) : (
                            ""
                        )}

                        {isLoggedIn ? (
                            <NavButton onClick={logout} labelText="Logout" />
                        ) : (
                            ""
                        )}

                        {isLoggedIn ? (
                            <IconButton
                                aria-label="Manage"
                                icon={<HamburgerIcon />}
                                colorScheme="teal"
                                onClick={onOpen}
                            />
                        ) : (
                            ""
                        )}
                    </HStack>
                </Flex>
            </Box>

            {isLoggedIn ? (
                <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <Center>
                            <DrawerHeader borderBottomWidth="1px">
                                {isLoggedIn ? "TEST" : "Not logged in"}
                            </DrawerHeader>
                        </Center>
                        <DrawerBody>
                            <VStack>
                                <Text fontSize="xl">Manage your lists</Text>
                                <Button
                                    leftIcon={<AddIcon />}
                                    onClick={() => navigate("createlist")}
                                >
                                    Create new list
                                </Button>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            ) : (
                ""
            )}
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
