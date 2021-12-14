import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  Button,
  CardActionArea,
} from "@mui/material";
import styles from "./ManhwaCard.module.scss";
export const ManhwaCard = ({ manhwa }) => {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(true);
  };
  const handleHoverEnd = () => {
    setHover(false);
  };
  return (
    <div onMouseOver={handleHover} onMouseLeave={handleHoverEnd}>
      {hover ? <p>yes</p> : <p>no</p>}
      <Card sx={{ maxWidth: 300, minWidth: 200 }}>
        <CardActionArea>
          <Typography
            variant="h3"
            sx={{
              fontSize: 16,
              textAlign: "center",
              marginTop: 2,
            }}
          >
            {manhwa.title}
          </Typography>
          <CardContent>
            <img
              className={styles.card__image}
              src={manhwa.coverImage}
              alt="cover image"
            />
          </CardContent>
          <CardActions>
            <Button variant="text">Details</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
};
