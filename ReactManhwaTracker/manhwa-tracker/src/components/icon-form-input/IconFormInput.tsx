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
    onChange,
}) => {
    return (
        <InputGroup>
            <InputLeftElement pointerEvents="none" children={icon} />
            <Input placeHolder={placeHolder} type={type} onChange={onChange} />
        </InputGroup>
    );
};

export default IconFormInput;
