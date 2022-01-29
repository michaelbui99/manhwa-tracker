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
    Flex,
    Heading,
    useToast,
} from "@chakra-ui/react";
import DateFormInput from "../../components/date-form-input/DateFormInput";
import * as React from "react";
import { useState, useEffect } from "react";
import { gql, useApolloClient } from "@apollo/client";
import { SourceMaterial } from "../../models/manhwa/source-material";
import { Status } from "../../models/manhwa/status";
import { Genre } from "../../models/manhwa/genre";
import { Tag } from "../../models/manhwa/tag";
import { Synonym } from "../../models/manhwa/synonym";
import { TitleLanguage } from "../../models/manhwa/title-language";
import FormHeading from "../../components/form-heading/FormHeading";

// TODO: Refactor the form inputs into seperate components for better readability
// TODO: Refactor into multi stage/step form to reduce how much the user have to scroll

const RequestManhwa: React.FC = () => {
    const client = useApolloClient();
    const [genres, setGenres] = useState<Genre[]>([]);
    const [tags, setTags] = useState<Tag[]>([]);
    const [addedGenres, setAddedGenres] = useState<Genre[]>([]);
    const [addedTags, setAddedTags] = useState<Genre[]>([]);
    const [addedSynonyms, setAddedSynonyms] = useState<Synonym[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<Genre>();
    const [selectedTag, setSelectedTag] = useState<Tag>();
    const [selectedSynonymLanguage, setSelectedSynonymLanugage] =
        useState<TitleLanguage>();
    const [synonymTitle, setSynonymTitle] = useState<null | string>();
    const [releaseDate, setReleaseDate] = useState<null | Date>(new Date());
    const [endDate, setEndDate] = useState<null | Date>(null);
    const [title, setTitle] = useState<null | string>();
    const [description, setDescription] = useState<null | string>();
    const [coverImage, setCoverImage] = useState<null | string>();
    const [sourceMaterial, setSourceMaterial] =
        useState<SourceMaterial | null>();
    const [releaseStatus, setReleaseStatus] = useState<Status | null>();

    const toast = useToast();

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
            try {
                const { data } = await client.query({ query: GENRES_AND_TAGS });
                const fetchedGenres = data.allGenres;
                const fetchedTags = data.allTags;
                return { genres: fetchedGenres, tags: fetchedTags };
            } catch (err) {
                toast({
                    title: "Network error",
                    description: "Unable to connect to server, try again later",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                });
            }
        }
        async function resolveGenresAndTags() {
            try {
                const data: any = await fetchGenresAndTags();
                console.log(data);
                const fetchedGenres = data.genres;
                const fetchedTags = data.tags;
                setGenres(fetchedGenres);
                setTags(fetchedTags);
            } catch (err) {
                console.log(err);
            }
        }

        try {
            resolveGenresAndTags();
        } catch (err) {
            console.log(err);
        }
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

    const sendRequest = () => {};

    return (
        <Box className="content">
            <Center>
                <Box
                    width={{ base: "250px", md: "500px" }}
                    boxShadow="lg"
                    padding="1rem 2rem"
                    borderRadius="10px"
                    backgroundColor="white"
                >
                    <FormHeading text="Request Manhwa" />
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
                            onInput={(e) => setTitle(e.currentTarget.value)}
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
                        <Textarea
                            variant="filled"
                            boxShadow="md"
                            onChange={(e) =>
                                setDescription(e.currentTarget.value)
                            }
                        />
                        <FormHelperText>
                            Use official description from creator / author if
                            posssible
                        </FormHelperText>

                        {/* Release Status */}
                        <FormLabel fontSize="1.3rem" marginTop="2rem">
                            Release Status
                        </FormLabel>
                        <Select
                            variant="filled"
                            boxShadow="md"
                            onChange={(e) =>
                                setReleaseStatus(
                                    e.currentTarget.value as Status
                                )
                            }
                        >
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
                        <Select
                            variant="filled"
                            boxShadow="md"
                            onChange={(e) =>
                                setSourceMaterial(
                                    e.currentTarget.value as SourceMaterial
                                )
                            }
                        >
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

                        {/* Release date */}
                        <DateFormInput
                            labelText="Release date"
                            helperText="Pick the date of when the first chapter of the Manhwa was released"
                            setDate={setReleaseDate}
                        />

                        {/* End date */}
                        <DateFormInput
                            labelText="End date"
                            helperText="Pick the date of when the last chapter of the Manhwa was released if any"
                            setDate={setEndDate}
                        />

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

                        {/* Cover image */}
                        <FormLabel
                            htmlFor="description"
                            fontSize="1.3rem"
                            marginTop="2rem"
                        >
                            Cover Image URL
                        </FormLabel>
                        <Input
                            id="title"
                            type="text"
                            variant="filled"
                            boxShadow="md"
                            required={true}
                            onInput={(e) =>
                                setCoverImage(e.currentTarget.value)
                            }
                        />

                        <Flex
                            flexDirection="row"
                            justifyContent="space-between"
                            marginTop="2rem"
                        >
                            <Button>Cancel</Button>
                            <Button
                                type="submit"
                                onClick={sendRequest}
                                colorScheme="teal"
                            >
                                Send Request
                            </Button>
                        </Flex>
                    </FormControl>
                </Box>
            </Center>
        </Box>
    );
};

export default RequestManhwa;
