import * as React from "react";
import { useState, useEffect } from "react";
import {
  ApolloClient,
  gql,
  InMemoryCache,
  useApolloClient,
  useQuery,
} from "@apollo/client";
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
import { Status } from "../../models/Status";
import { SourceMaterial } from "../../models/SourceMaterial";
import { Genre } from "../../models/Genre";
const Search: React.FC = () => {
  const [manhwas, setManhwas] = useState<Manhwa[]>([]);
  const [manhwasToShow, setManhwasToShow] = useState<Manhwa[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const ALLMANHWAS = gql`
    {
      allManhwas {
        title
        description
        genres {
          id
          name
        }
        id
        coverImage
      }
    }
  `;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [tags, setTags] = useState<Tag[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const client = useApolloClient();
  const fetchManhwas = () => {};
  useEffect(() => {
    // On mount side effects
    client
      .query({ query: ALLMANHWAS })
      .then((r: any) => {
        setManhwas(r.data.allManhwas);
        setIsLoading(false);
      })
      .catch((err) => setError(true));
    setManhwasToShow(manhwas);
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
