import React, { useEffect, useState } from "react";
import { Grid, Grow, Typography } from "@mui/material";
import Manhwa from "../models/manhwa/manhwa";
import ManhwaCard from "./ManhwaCard";

interface ManhwaDirectoryProps {
    manhwas: Manhwa[];
}

const ManhwaDirectory: React.FC<ManhwaDirectoryProps> = ({ manhwas }) => {
    const [manhwasToDisplay, setManhwasToDisplay] = useState<Manhwa[]>(manhwas);

    useEffect(() => {
        setManhwasToDisplay(manhwas);
    }, [manhwas]);

    return (
        <Grid container>
            {manhwasToDisplay.map((manhwa) => (
                <Grid key={manhwa.id} item xs={3}>
                    <ManhwaCard manhwa={manhwa} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ManhwaDirectory;
