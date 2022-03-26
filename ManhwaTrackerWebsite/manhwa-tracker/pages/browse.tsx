import React from "react";
import { NextPage } from "next";
import Meta from "../components/Meta";
import { Box, Stack } from "@mui/material";
import { ManhwaServiceImpl } from "../services/ManhwaServiceImpl";

const browse: NextPage = () => {
    return <Stack>Hello</Stack>;
};

export async function getStaticProps() {
    const manhwaService = new ManhwaServiceImpl();
    const manhwas = await manhwaService.getAllManhwas();

    return {
        props: {
            manhwas,
        },
    };
}

export default browse;
