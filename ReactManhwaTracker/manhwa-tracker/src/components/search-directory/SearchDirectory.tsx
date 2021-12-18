import * as React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Manhwa from "./../../models/Manhwa";
import { ManhwaCard } from "../manhwa-card/ManhwaCard";
const SearchDirectory: React.FC<{ manhwas: Manhwa[] }> = ({ manhwas }) => {
  return (
    <div>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap={6}
      >
        {manhwas.map((m) => (
          <ManhwaCard manhwa={m} />
        ))}
      </Grid>
    </div>
  );
};

export default SearchDirectory;
