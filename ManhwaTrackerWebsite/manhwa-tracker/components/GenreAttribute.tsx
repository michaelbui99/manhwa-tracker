import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface GenreAttributeProps {
    text: string;
}

const GenreAttribute: React.FC<GenreAttributeProps> = ({ text }) => {
    return (
        <Box padding="0.25rem 1rem" bgcolor="#222">
            <Typography>{text}</Typography>
        </Box>
    );
};

export default GenreAttribute;
