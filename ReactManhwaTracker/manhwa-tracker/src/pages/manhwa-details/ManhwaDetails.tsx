import * as React from "react";
import { useState, useEffect } from "react";
import { gql, useApolloClient } from "@apollo/client";
import { useParams } from "react-router-dom";
import Manhwa from "../../models/manhwa/manhwa";

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

    return <div>{manhwa ? <p>{manhwa.title}</p> : ""}</div>;
};

export default ManhwaDetails;
