import { Button } from "@chakra-ui/react";
import * as React from "react";

interface NavButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    labelText: string;
}

export const NavButton: React.FC<NavButtonProps> = ({ onClick, labelText }) => {
    return (
        <Button colorScheme="teal" size="sm" onClick={onClick}>
            {labelText}
        </Button>
    );
};
