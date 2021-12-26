import {
    Box,
    Center,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Select,
    Textarea,
    VStack,
    Text,
    UnorderedList,
    ListItem,
    Button,
} from "@chakra-ui/react";
import * as React from "react";
import { useState, useEffect } from "react";
import { gql, useApolloClient } from "@apollo/client";
import { SourceMaterial } from "../../models/manhwa/source-material";
import { Status } from "../../models/manhwa/status";
import { Genre } from "../../models/manhwa/genre";
import { Tag } from "../../models/manhwa/tag";

// TODO: Refactor the form inputs into seperate components for better readability
// TODO: Refactor into multi stage/step form to reduce how much the user have to scroll

const RequestManhwa: React.FC = () => {
    const client = useApolloClient();
    const [genres, setGenres] = useState<Genre[]>([]);
    const [tags, setTags] = useState<Tag[]>([]);
    const [addedGenres, setAddedGenres] = useState<Genre[]>([]);
    const [addedTags, setAddedTags] = useState<Genre[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<Genre>();
    const [selectedTag, setSelectedTag] = useState<Tag>();
    const [releaseDate, setReleaseDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<null | Date>(null);
    const GENRES_AND_TAGS = gql`
        {
            allGenres {
                id
                name
            }
            allTags {
                id
                name
            }
        }
    `;

    useEffect(() => {
        // on mount side effects
        async function fetchGenresAndTags() {
            const { data } = await client.query({ query: GENRES_AND_TAGS });
            const fetchedGenres = data.allGenres;
            const fetchedTags = data.allTags;
            return { genres: fetchedGenres, tags: fetchedTags };
        }
        async function resolveGenresAndTags() {
            const data = await fetchGenresAndTags();
            console.log(data);
            const fetchedGenres = data.genres;
            const fetchedTags = data.tags;
            setGenres(fetchedGenres);
            setTags(fetchedTags);
        }

        resolveGenresAndTags();
    }, []);

    const addGenre = () => {
        if (genres && selectedGenre && !addedGenres.includes(selectedGenre)) {
            setAddedGenres([...addedGenres, selectedGenre]);
        }
    };

    const addTag = () => {
        if (tags && selectedTag && !addedTags.includes(selectedTag)) {
            setAddedTags([...addedTags, selectedTag]);
            console.log("New tag added");
        }
    };

    return (
        <Box className="content">
            <Center>
                <Box
                    width={{ base: "250px", md: "500px" }}
                    boxShadow="lg"
                    padding="1rem 2rem"
                    borderRadius="10px"
                >
                    {/* Title */}
                    <FormControl>
                        <FormLabel htmlFor="title" fontSize="1.3rem">
                            Title
                        </FormLabel>
                        <Input
                            id="title"
                            type="text"
                            variant="filled"
                            boxShadow="md"
                            required={true}
                        />
                        <FormHelperText>
                            Use the english title if possible
                        </FormHelperText>

                        {/* Description */}
                        <FormLabel
                            htmlFor="description"
                            fontSize="1.3rem"
                            marginTop="2rem"
                        >
                            Description
                        </FormLabel>
                        <Textarea variant="filled" boxShadow="md" />
                        <FormHelperText>
                            Use official description from creator / author if
                            posssible
                        </FormHelperText>

                        {/* Release Status */}
                        <FormLabel fontSize="1.3rem" marginTop="2rem">
                            Release Status
                        </FormLabel>
                        <Select variant="filled" boxShadow="md">
                            <option disabled selected>
                                -- select an option --
                            </option>
                            {Object.values(Status).map((status) => (
                                <option value={status}>{status}</option>
                            ))}
                        </Select>
                        <FormHelperText>
                            Choose current release status of the requested
                            manhwa
                        </FormHelperText>

                        {/* Source Material */}
                        <FormLabel fontSize="1.3rem" marginTop="2rem">
                            Source Material
                        </FormLabel>
                        <Select variant="filled" boxShadow="md">
                            <option disabled selected>
                                -- select an option --
                            </option>
                            {Object.values(SourceMaterial).map(
                                (sourceMaterial) => (
                                    <option value={sourceMaterial}>
                                        {sourceMaterial}
                                    </option>
                                )
                            )}
                        </Select>
                        <FormHelperText>
                            Choose what the source material of the manhwa is
                            based on
                        </FormHelperText>

                        {/* Genres */}
                        <FormLabel fontSize="1.3rem" marginTop="2rem">
                            Genre(s)
                        </FormLabel>
                        <Text fontSize="md">Added genres:</Text>
                        {addedGenres.length > 0 ? (
                            <UnorderedList>
                                {addedGenres.map((g) => (
                                    <ListItem>{g.name}</ListItem>
                                ))}
                            </UnorderedList>
                        ) : (
                            <Text fontSize="sm">
                                No genres has been added yet
                            </Text>
                        )}

                        <Select
                            variant="filled"
                            boxShadow="md"
                            marginTop="0.5rem"
                            onChange={(e) =>
                                setSelectedGenre(
                                    genres.find(
                                        (g) =>
                                            g.name.toLowerCase() ===
                                            e.currentTarget.value.toLowerCase()
                                    )
                                )
                            }
                        >
                            <option disabled selected>
                                -- select an option --
                            </option>
                            {genres.map((genre) => (
                                <option value={genre.name}>{genre.name}</option>
                            ))}
                        </Select>

                        <Button onClick={addGenre} marginTop="0.6rem">
                            Add
                        </Button>
                        <FormHelperText>
                            Add genres for the Manhwa. Use the official genres
                            defined by author / publisher if any is available.
                            <br />
                            Multiple genres can be added by selecting a genre
                            and then press "Add"
                        </FormHelperText>

                        {/* Tags */}
                        <FormLabel fontSize="1.3rem" marginTop="2rem">
                            Tag(s)
                        </FormLabel>
                        <Text fontSize="md">Added Tags:</Text>
                        {addedTags.length > 0 ? (
                            <UnorderedList>
                                {addedTags.map((t) => (
                                    <ListItem>{t.name}</ListItem>
                                ))}
                            </UnorderedList>
                        ) : (
                            <Text fontSize="sm">
                                No Tags has been added yet
                            </Text>
                        )}

                        <Select
                            variant="filled"
                            boxShadow="md"
                            marginTop="0.5rem"
                            onChange={(e) =>
                                setSelectedTag(
                                    tags.find(
                                        (t) =>
                                            t.name.toLowerCase() ===
                                            e.currentTarget.value.toLowerCase()
                                    )
                                )
                            }
                        >
                            <option disabled selected>
                                -- select an option --
                            </option>
                            {tags.map((tag) => (
                                <option value={tag.name}>{tag.name}</option>
                            ))}
                        </Select>

                        <Button onClick={addTag} marginTop="0.6rem">
                            Add
                        </Button>
                        <FormHelperText>
                            Add tags for the Manhwa. Use the official tags
                            defined by author / publisher if any is available.
                            <br />
                            Multiple tags can be added by selecting a tags and
                            then press "Add"
                        </FormHelperText>

                        {/* Release date */}
                        <FormLabel fontSize="1.3rem" marginTop="2rem">
                            Release date
                        </FormLabel>
                        <Input
                            type="date"
                            onChange={(e: any) =>
                                setReleaseDate(e.target.valueAsDate)
                            }
                        />
                        <FormHelperText>
                            Pick the date of when the first chapter of the
                            Manhwa was released
                        </FormHelperText>

                        {/* End date */}
                        <FormLabel fontSize="1.3rem" marginTop="2rem">
                            End date
                        </FormLabel>
                        <Input
                            type="date"
                            onChange={(e: any) =>
                                setEndDate(e.target.valueAsDate)
                            }
                        />
                        <FormHelperText>
                            Pick the date of when the last chapter of the Manhwa
                            was released if any
                        </FormHelperText>
                    </FormControl>
                </Box>
            </Center>
        </Box>
    );
};

export default RequestManhwa;
