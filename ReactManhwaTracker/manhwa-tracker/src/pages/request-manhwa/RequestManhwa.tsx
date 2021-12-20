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
import { Status } from "../../models/Status";

const RequestManhwa: React.FC = () => {
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
            <Input id="title" type="text" variant="filled" boxShadow="md" />
            <FormHelperText>Use the english title if possible</FormHelperText>

            <FormLabel htmlFor="description" fontSize="1.3rem" marginTop="2rem">
              Description
            </FormLabel>
            <Textarea variant="filled" />
            <FormHelperText>
              Use official description from creator / author if posssible
            </FormHelperText>

            <FormLabel fontSize="1.3rem" marginTop="2rem">
              Release Status
            </FormLabel>
            <Select variant="filled">
              {Object.values(Status).map((status) => (
                <option value={status}>{status}</option>
              ))}
            </Select>
            <FormHelperText>
              Choose current release status of the requested manhwa
            </FormHelperText>
          </FormControl>
        </Box>
      </Center>
    </Box>
  );
};

export default RequestManhwa;
