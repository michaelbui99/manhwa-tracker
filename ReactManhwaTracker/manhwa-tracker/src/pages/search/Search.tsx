import * as React from "react";
import { useState, useEffect } from "react";
import {
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import SearchDirectory from "../../components/search-directory/SearchDirectory";
import styles from "./Search.module.scss";
import { Tag } from "../../models/Tag";
import Manhwa from "../../models/Manhwa";
import { Genre } from "../../models/manhwa/genre";
import { gql, useApolloClient } from "@apollo/client";
const Search: React.FC = () => {
  const [manhwas, setManhwas] = useState<Manhwa[]>([]);
  const [manhwasToShow, setManhwasToShow] = useState<Manhwa[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [tags, setTags] = useState<Tag[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const client = useApolloClient();
  const fetchData = async () => {
    const ALLMANHWAS = gql`
      {
        allManhwas {
          chapterCount
          coverImage
          description
          endDate
          format
          genres {
            id
            name
          }
          id
          releaseDate
          sourceMaterial
          status
          title
          __typename
        }
      }
    `;
    try {
      const request = client.query({ query: ALLMANHWAS });
      const response = await request;
      return response.data.allManhwas;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  useEffect(() => {
    // On mount side effects
    async function resolvedata() {
      try {
        const data = await fetchData();
        setManhwas(data);
        setManhwasToShow(manhwas);
        setIsLoading(false);
      } catch (err) {
        setError(true);
      }
    }
    resolvedata();
  }, []);

  useEffect(() => {
    filterManhwas();
  }, [manhwasToShow, manhwas]);

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
        {isLoading ? (
          <Center>
            <Spinner size="lg" />
          </Center>
        ) : (
          <SearchDirectory manhwas={manhwasToShow} />
        )}
        {error ? (
          <Center>
            <p>Something went wrong...</p>
          </Center>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Search;
