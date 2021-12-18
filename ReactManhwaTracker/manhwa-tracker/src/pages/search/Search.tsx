import * as React from "react";
import { useState, useEffect } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import SearchDirectory from "../../components/search-directory/SearchDirectory";
import styles from "./Search.module.scss";
import { Tag } from "../../models/Tag";
import Manhwa from "../../models/Manhwa";
import { Status } from "../../models/Status";
import { SourceMaterial } from "../../models/SourceMaterial";
import { Genre } from "../../models/Genre";
const Search: React.FC = () => {
  const [manhwas, setManhwas] = useState<Manhwa[]>([]);
  const [manhwasToShow, setManhwasToShow] = useState<Manhwa[]>([]);
  const [genres, setGenres] = useState([
    "Fantasy",
    "Romance",
    "Action",
    "Comedy",
  ]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const testManhwa: Manhwa = {
    id: 1,
    title: "Solo leveling",
    description:
      "In a world where awakened beings called “Hunters” must battle deadly monsters to protect humanity, Sung Jinwoo, nicknamed “the weakest hunter of all mankind,” finds himself in a constant struggle for survival. One day, after a brutal encounter in an overpowered dungeon wipes out his party and threatens to end his life, a mysterious System chooses him as its sole player: Jinwoo has been granted the rare opportunity to level up his abilities, possibly beyond any known limits. Follow Jinwoo’s journey as he takes on ever-stronger enemies, both human and monster, to discover the secrets deep within the dungeons and the ultimate extent of his powers.",
    format: "Manga (South Korean)",
    status: Status.RELEASING,
    sourceMaterial: SourceMaterial.WEB_NOVEL,
    releaseDate: new Date("12-12-2021"),
    endDate: new Date("12-12-3000"),
    chapterCount: 120,
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105398-b673Vt5ZSuz3.jpg",
    tags: [],
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "Fantasy" },
      { id: 3, name: "Adventure" },
    ],
    synonyms: [],
  };
  useEffect(() => {
    //TODO: Fetch genres and tags on mount
    const tempGenres = ["Fantasy", "Romance", "Action", "Comedy"];
    const tempTags = ["Anti-Hero", "Super Power", "Anti-Hero"];
    // setGenres(tempGenres);
    // setTags(tempTags);
    setManhwas([testManhwa]);
    setManhwasToShow(manhwas);
    console.log(testManhwa.coverImage);
  }, []);
  useEffect(() => {
    filterManhwas();
  }, [manhwasToShow]);

  const filterManhwas = (): void => {
    if (searchInput) {
      setManhwasToShow(
        manhwas.filter((m) =>
          m.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    } else {
      setManhwasToShow(manhwas);
    }
  };
  const handleSearchInputChange = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    setSearchInput(e.currentTarget.value);
    filterManhwas();
  };

  const selectGenre = (g: Genre) => {
    setSelectedGenres(selectedGenres.concat(g));
  };
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.search__input}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
            <Input
              placeholder="Search for manhwa"
              maxW="15rem"
              onInput={handleSearchInputChange}
            />
          </InputGroup>
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
