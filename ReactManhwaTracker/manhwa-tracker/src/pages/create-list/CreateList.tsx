import * as React from "react";
import { gql, useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import FormCard from "../../components/form-card/FormCard";
import FormHeading from "../../components/form-heading/FormHeading";

const CreateList: React.FC = () => {
    const client = useApolloClient();
    const CREATE_LIST_MUTATION = gql`
        mutation ($listName: String!, $listDescription: String!) {
            createList(name: $listName, description: $listDescription) {
                id
                name
                description
            }
        }
    `;

    const navigate = useNavigate();

    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");

    const createNewList = async () => {
        setErrorMessage("");

        setLoading(true);

        try {
            var response = await client.mutate({
                mutation: CREATE_LIST_MUTATION,
                variables: {
                    listName: name,
                    listDescription: description,
                },
            });

            setLoading(false);
            if (response.errors != null && response.errors.length > 0) {
                setErrorMessage(response.errors[0].toString());
            } else {
                navigate("/");
            }
        } catch (err) {
            setLoading(false);
            setErrorMessage("Something went wrong");
        }
    };

    return (
        <FormCard>
            <FormControl>
                <FormHeading text="Create a new list" />

                {/* NAME */}
                <FormLabel htmlFor="title" fontSize="1.3rem">
                    Name of list
                </FormLabel>
                <Input
                    id="title"
                    type="text"
                    variant="filled"
                    boxShadow="md"
                    required={true}
                    onInput={(e) => setName(e.currentTarget.value)}
                />
                <FormHelperText>
                    Choose what the name of the list should be
                </FormHelperText>

                {/* DESCRIPTION */}
                <FormLabel htmlFor="title" fontSize="1.3rem" marginTop="1rem">
                    Description for list
                </FormLabel>
                <Input
                    id="title"
                    type="text"
                    variant="filled"
                    boxShadow="md"
                    required={false}
                    onInput={(e) => setDescription(e.currentTarget.value)}
                />
                <FormHelperText>
                    Describe what the list contains, e.g. 'Currently reading',
                    'All the action manhwas I am reading' etc.
                </FormHelperText>

                <Flex
                    flexDirection="row"
                    justifyContent="space-between"
                    marginTop="2rem"
                >
                    <Button onClick={() => navigate("/")}>Cancel</Button>
                    <Button colorScheme="teal" isLoading={loading}>
                        Create
                    </Button>
                </Flex>
            </FormControl>
        </FormCard>
    );
};

export default CreateList;
