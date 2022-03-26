import React, { useState, useEffect } from "react";
import { Box, Button, Fade, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
    const [pageLoad, setPageLoad] = useState(false);

    useEffect(() => {
        setPageLoad(true);
    }, []);

    return (
        <>
            <Fade in={pageLoad}>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    width="100%"
                    height="100%"
                    marginTop="2rem"
                >
                    <Typography display="block" fontSize="44px" variant="h2">
                        Manhwa Tracker
                    </Typography>
                    <Typography fontSize="44px" variant="h2">
                        Track and Discover Manhwas
                    </Typography>

                    <Typography maxWidth="600px" marginTop="1rem">
                        Manhwa Tracker is a free tool used to discover new
                        Manhwas while also enabling you to keep track of the
                        Manhwas you're currently reading.
                    </Typography>

                    <Stack direction="row" spacing={3} marginTop="1rem">
                        <Button variant="contained">Sign up today</Button>
                        <Button variant="contained">Login</Button>
                    </Stack>
                </Box>
            </Fade>
        </>
    );
};

export default Home;
