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
import GenreAttribute from "./GenreAttribute";
import { useNavigate } from "../hooks/useNavigate";

interface ManhwaCardProps {
    manhwa: Manhwa;
}

const ManhwaCard: React.FC<ManhwaCardProps> = ({ manhwa }) => {
    const navigate = useNavigate();
    return (
        <Card
            sx={{ width: "250px", minHeight: "350px" }}
            elevation={6}
            onClick={(e) =>
                navigate(
                    e,
                    `/manhwaDetails/${manhwa.id}`,
                    `/manhwaDetails/${manhwa.id}`
                )
            }
        >
            <CardActionArea>
                <Tooltip title={manhwa.description} placement="right-start">
                    <CardContent>
                        <Typography variant="h6">{manhwa.title}</Typography>
                        <CardMedia component="img" image={manhwa.coverImage} />
                        <Stack direction="row" spacing={2} paddingTop={2}>
                            <GenreAttribute text={manhwa.genres[0].name} />
                            <GenreAttribute text={manhwa.genres[1].name} />
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
