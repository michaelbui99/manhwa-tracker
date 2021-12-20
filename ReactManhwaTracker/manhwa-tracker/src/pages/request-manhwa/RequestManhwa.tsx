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
} from "@chakra-ui/react";
import * as React from "react";
import { useState, useEffect } from "react";
import { gql, useApolloClient } from "@apollo/client";
import { SourceMaterial } from "../../models/SourceMaterial";
import { Status } from "../../models/Status";
import { Genre } from "../../models/Genre";

const RequestManhwa: React.FC = () => {
  const client = useApolloClient();
  const [genres, setGenres] = useState<Genre[]>();
  const ALLGENRES = gql`
    {
      allGenres {
        id
        name
      }
    }
  `;
  useEffect(() => {
    async function fectchGenres() {
      const { data } = await client.query({ query: ALLGENRES });
      const fetchedGenres = data.allGenres;
      return fetchedGenres;
    }
    async function resolveGenres() {
      const fetchedGenres = await fectchGenres();
      setGenres(fetchedGenres);
      console.log(genres);
    }

    resolveGenres();
  }, []);
  return (
    <Box className="content">
      <Center>
        <Box
          width={{ base: "250px", md: "500px" }}
          boxShadow="lg"
          padding="1rem 2rem"
          borderRadius="10px"
        >
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
            <FormHelperText>Use the english title if possible</FormHelperText>

            <FormLabel htmlFor="description" fontSize="1.3rem" marginTop="2rem">
              Description
            </FormLabel>
            <Textarea variant="filled" boxShadow="md" />
            <FormHelperText>
              Use official description from creator / author if posssible
            </FormHelperText>

            <FormLabel fontSize="1.3rem" marginTop="2rem">
              Release Status
            </FormLabel>
            <Select variant="filled" boxShadow="md">
              {Object.values(Status).map((status) => (
                <option value={status}>{status}</option>
              ))}
            </Select>
            <FormHelperText>
              Choose current release status of the requested manhwa
            </FormHelperText>

            <FormLabel fontSize="1.3rem" marginTop="2rem">
              Source Material
            </FormLabel>
            <Select variant="filled" boxShadow="md">
              {Object.values(SourceMaterial).map((sourceMaterial) => (
                <option value={sourceMaterial}>{sourceMaterial}</option>
              ))}
            </Select>
            <FormHelperText>
              Choose what the source material of the manhwa is based on
            </FormHelperText>
          </FormControl>
        </Box>
      </Center>
    </Box>
  );
};

export default RequestManhwa;
