import React from "react";
import { useNavigate } from "../hooks/useNavigate";
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/menu";

const Navbar: React.FC = () => {
    const navigateTo = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Manhwa Tracker
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                        <Button
                            color="inherit"
                            onClick={(event) => navigateTo(event, "/")}
                        >
                            Home
                        </Button>

                        <Button
                            color="inherit"
                            onClick={(event) => navigateTo(event, "/search")}
                        >
                            Browse
                        </Button>
                        <Button
                            color="inherit"
                            onClick={(event) =>
                                navigateTo(event, "requestmanhwa")
                            }
                        >
                            Request Manhwa
                        </Button>
                        <Button
                            color="inherit"
                            onClick={(event) => navigateTo(event, "login")}
                        >
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
