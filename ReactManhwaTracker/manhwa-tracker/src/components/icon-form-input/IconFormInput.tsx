import * as React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

interface IconFormInputProps {
    placeHolder: string;
    type: string;
    icon: any;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}
const IconFormInput: React.FC<IconFormInputProps> = ({
    placeHolder,
    type,
    icon,
}) => {
    return (
        <InputGroup>
            <InputLeftElement pointerEvents="none" children={icon} />
            <Input placeHolder={placeHolder} type={type} />
        </InputGroup>
    );
};

export default IconFormInput;
