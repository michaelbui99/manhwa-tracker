import { Grid } from "@mui/material";
import { ManhwaCard } from "../manhwa-card/ManhwaCard";
const SearchDirectory = ({ manhwas }) => {
  return (
    <div>
      <Grid container spacing={8}>
        {manhwas.map((m) => (
          <Grid item xs={12} sm={6} md={4}>
            <ManhwaCard manhwa={m} key={m.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SearchDirectory;
