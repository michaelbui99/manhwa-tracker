import { Box, Button, Fade, Link, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const SignUp = () => {
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
                    marginTop="2vh"
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
                            Sign up
                        </Typography>
                        <TextField label="Email" fullWidth />
                        <TextField label="Confirm Email" fullWidth />
                        <TextField label="Password" fullWidth />
                        <TextField label="Confirm Password" fullWidth />
                        <Typography>
                            Already have an account?{" "}
                            <Link href="/login">Login here</Link>
                        </Typography>
                        <Button variant="contained" sx={{ marginLeft: "auto" }}>
                            Sign up
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </>
    );
};

export default SignUp;
