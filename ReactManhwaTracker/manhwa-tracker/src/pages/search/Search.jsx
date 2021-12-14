import * as React from "react";
import { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import SearchDirectory from "../../components/search-directory/SearchDirectory";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Search.module.scss";
const Search = () => {
  const [manhwas, setManhwas] = useState([]);
  const [manhwasToShow, setManhwasToShow] = useState([]);
  const [genres, setGenres] = useState([
    "Fantasy",
    "Romance",
    "Action",
    "Comedy",
  ]);
  const [tags, setTags] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const testManhwa = {
    id: 1,
    title: "Solo leveling",
    description:
      "In a world where awakened beings called “Hunters” must battle deadly monsters to protect humanity, Sung Jinwoo, nicknamed “the weakest hunter of all mankind,” finds himself in a constant struggle for survival. One day, after a brutal encounter in an overpowered dungeon wipes out his party and threatens to end his life, a mysterious System chooses him as its sole player: Jinwoo has been granted the rare opportunity to level up his abilities, possibly beyond any known limits. Follow Jinwoo’s journey as he takes on ever-stronger enemies, both human and monster, to discover the secrets deep within the dungeons and the ultimate extent of his powers.",
    format: "Manga (South Korean)",
    status: "RELEASING",
    sourceMaterial: "Web novel",
    releaseDate: "12-12-2021",
    endDate: "",
    chapterCount: 120,
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105398-b673Vt5ZSuz3.jpg",
    tags: [],
    genres: [],
  };
  useEffect(() => {
    //TODO: Fetch genres and tags on mount
    const tempGenres = ["Fantasy", "Romance", "Action", "Comedy"];
    const tempTags = ["Anti-Hero", "Super Power", "Anti-Hero"];
    setGenres(tempGenres);
    setTags(tempTags);
    setManhwasToShow([testManhwa]);
  }, []);

  const selectGenre = (g) => {
    setSelectedGenres(selectedGenres.concat(g));
  };
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.search__input}>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className={styles.search__filters}></div>
      </div>
      <div className={styles.search__directory}>
        <SearchDirectory manhwas={manhwasToShow} />
      </div>
    </div>
  );
};

export default Search;
