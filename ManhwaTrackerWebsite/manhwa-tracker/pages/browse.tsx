import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Box, Grow, TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { ManhwaServiceImpl } from "../services/ManhwaServiceImpl";
import manhwa from "../models/manhwa/manhwa";
import styles from "../styles/Browse.module.scss";
import ManhwaDirectory from "../components/ManhwaDirectory";
import Manhwa from "../models/manhwa/manhwa";

interface browseProps {
    manhwas: manhwa[];
}

const Browse: NextPage<browseProps> = ({ manhwas }) => {
    const [searchInput, setSearchInput] = useState("");
    const [pageLoad, setPageLoad] = useState(false);
    const [allManhwas, setAllManhwas] = useState<Manhwa[]>(manhwas);
    const [manhwasToDisplay, setManhwasToDisplay] = useState<Manhwa[]>([]);

    useEffect(() => {
        setManhwasToDisplay(allManhwas);
        setPageLoad(true);
    }, [allManhwas]);

    const handleSearchOnKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (e.key === "Enter") {
            // TODO: "Search for manhwa"
            console.log("ENTER --> SEARCHING: " + searchInput);
            if (!searchInput) {
                setManhwasToDisplay(allManhwas);
            }
            setSearchInput("");
        }
    };

    const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Grow in={pageLoad}>
                <Stack direction="column" spacing={2}>
                    <Box className={styles.searchContainer}>
                        <TextField
                            value={searchInput}
                            label="Search"
                            onKeyDown={handleSearchOnKeyDown}
                            onInput={handleOnInput}
                        />
                    </Box>

                    <ManhwaDirectory manhwas={manhwasToDisplay} />
                </Stack>
            </Grow>
        </Box>
    );
};

export async function getStaticProps() {
    const manhwaService = new ManhwaServiceImpl();
    const manhwas = await manhwaService.getAllManhwas();
    return {
        props: {
            manhwas,
        },
        revalidate: 600,
    };
}

export default Browse;
