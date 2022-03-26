import React from "react";
import Manhwa from "../models/manhwa/manhwa";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";

interface ManhwaCardProps {
    manhwa: Manhwa;
}

const ManhwaCard: React.FC<ManhwaCardProps> = ({ manhwa }) => {
    return (
        <Card sx={{ width: "250px", minHeight: "350px" }}>
            <CardActionArea>
                <Tooltip title={manhwa.description} placement="right-start">
                    <CardContent>
                        <Typography variant="h6">{manhwa.title}</Typography>
                        <CardMedia component="img" image={manhwa.coverImage} />
                        <Stack direction="row" spacing={2} paddingTop={2}>
                            <Typography>{manhwa.genres[0].name}</Typography>
                            <Typography>{manhwa.genres[1].name}</Typography>
                        </Stack>
                    </CardContent>
                </Tooltip>
            </CardActionArea>
            <CardActions>
                <Button>Add to list</Button>
            </CardActions>
        </Card>
    );
};

export default ManhwaCard;
