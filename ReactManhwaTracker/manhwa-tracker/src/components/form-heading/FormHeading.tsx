import { Heading } from "@chakra-ui/react";
import * as React from "react";

export interface FormHeadingProps {
    text: string;
}

const FormHeading: React.FC<FormHeadingProps> = ({ text }) => {
    return (
        <Heading textAlign="center" fontSize="1.7rem" fontWeight="normal">
            {text}
        </Heading>
    );
};

export default FormHeading;
