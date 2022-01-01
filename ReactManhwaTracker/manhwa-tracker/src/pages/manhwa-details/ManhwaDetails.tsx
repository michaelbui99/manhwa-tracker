import * as React from "react";
import { useState, useEffect } from "react";
import { gql, useApolloClient } from "@apollo/client";
import { useParams } from "react-router-dom";
import Manhwa from "../../models/manhwa/manhwa";
import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Image,
    Text,
} from "@chakra-ui/react";
import GenreAttribute from "../../components/genre-attribute/GenreAttribute";
import TagAttribute from "../../components/tag-attribute/TagAttribute";
import { Status } from "../../models/manhwa/status";

const ManhwaDetails: React.FC = () => {
    const [manhwa, setManhwa] = useState<Manhwa | null>();
    const client = useApolloClient();
    const { id } = useParams();
    const MANHWA_QUERY = gql`
        query ($manhwaId: Int!) {
            manhwaById(id: $manhwaId) {
                id
                title
                description
                format
                status
                sourceMaterial
                releaseDate
                endDate
                chapterCount
                coverImage
                tags {
                    id
                    name
                }
                genres {
                    id
                    name
                }
                synonyms {
                    title
                    titleLanguage
                }
            }
        }
    `;

    const getDateString = (date: Date): string => {
        const splitDateString: string[] = date.toString().split("T");
        return splitDateString[0];
    };

    const fetchManhwa = async () => {
        try {
            const { data } = await client.query({
                query: MANHWA_QUERY,
                variables: { manhwaId: parseInt(id as any) },
            });
            console.log(data.manhwaById);
            return data.manhwaById;
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        // On mount side effects
        async function resolveManhwa() {
            const data = await fetchManhwa();
            setManhwa(data);
        }
        resolveManhwa();
    }, []);

    return (
        <Box className="content">
            <Box boxShadow="md" minHeight="30vh" padding="2rem 1rem">
                <HStack>
                    <Image
                        display={{ base: "none", md: "block" }}
                        maxWidth={{ base: "100px", md: "200px", lg: "300px" }}
                        maxHeight={{ base: "150px", md: "250px", lg: "350px" }}
                        paddingRight="3rem"
                        src={
                            manhwa
                                ? manhwa.coverImage
                                    ? manhwa.coverImage
                                    : ""
                                : ""
                        }
                    />

                    <Box>
                        <Heading fontSize="2xl">
                            {manhwa ? `${manhwa.title}` : ""}
                        </Heading>
                        {/* Chapter count  */}
                        <Text marginTop="1rem">
                            Chapter count: {manhwa ? manhwa.chapterCount : "0"}
                        </Text>

                        {/* Release date */}
                        <Text>
                            Release date:
                            {manhwa
                                ? manhwa.status === Status.RELEASING ||
                                  manhwa.status === Status.CANCELLED ||
                                  manhwa.status === Status.HIATUS ||
                                  manhwa.status === Status.FINISHED
                                    ? " " + getDateString(manhwa.releaseDate)
                                    : ""
                                : ""}
                        </Text>

                        {/* End date if manhwa is finished or cancelled */}
                        {manhwa
                            ? manhwa.status === Status.FINISHED ||
                              manhwa.status === Status.CANCELLED
                                ? getDateString(manhwa.endDate)
                                : ""
                            : ""}

                        {/* Description */}
                        <Text marginTop="1rem">
                            {manhwa ? manhwa.description : ""}
                        </Text>

                        {/* All genres if any */}
                        {manhwa ? (
                            manhwa?.genres.length > 0 ? (
                                <HStack marginTop="1rem">
                                    {manhwa.genres.map((g) => (
                                        <GenreAttribute genre={g} />
                                    ))}
                                </HStack>
                            ) : (
                                ""
                            )
                        ) : (
                            ""
                        )}

                        {/* All tags if any */}
                        {manhwa ? (
                            manhwa?.tags.length > 0 ? (
                                <Flex
                                    justifyContent="flex-start"
                                    columnGap="2rem"
                                >
                                    <HStack marginTop="1rem">
                                        {manhwa.tags.map((t) => (
                                            <TagAttribute tag={t} />
                                        ))}
                                    </HStack>
                                    <Button colorScheme="teal">
                                        Add to list
                                    </Button>
                                </Flex>
                            ) : (
                                ""
                            )
                        ) : (
                            ""
                        )}
                    </Box>
                </HStack>
            </Box>
        </Box>
    );
};

export default ManhwaDetails;
