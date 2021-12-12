import * as React from "react";
import { AppBar, Typography } from "@mui/material";
import { Container } from "@mui/material";
export const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xl: "none", md: "flex" } }}
          >
            Manhwa-Tracker
          </Typography>
        </Container>
      </AppBar>
    </div>
  );
};
