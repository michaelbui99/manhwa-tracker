import React, { useEffect, useState } from "react";
import { Box, Button, Fade, Link, TextField, Typography } from "@mui/material";

const Login = () => {
    const [pageLoad, setPageLoad] = useState(false);

    useEffect(() => {
        setPageLoad(true);
    }, []);

    return (
        <>
            <Fade in={pageLoad}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexGrow="1"
                    marginTop="10vh"
                >
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="flex-start"
                        flexDirection="column"
                        width="400px"
                        rowGap="2rem"
                    >
                        <Typography variant="h2" fontSize="24px">
                            Login
                        </Typography>
                        <TextField label="Email" fullWidth />
                        <TextField label="Password" fullWidth />
                        <Typography>
                            Don't have an account?{" "}
                            <Link href="/signup">Sign up here</Link>
                        </Typography>
                        <Button variant="contained" sx={{ marginLeft: "auto" }}>
                            Login
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </>
    );
};

export default Login;
