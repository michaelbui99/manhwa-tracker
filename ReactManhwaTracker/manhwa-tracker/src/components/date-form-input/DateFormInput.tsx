import * as React from "react";
import { FormLabel, Input, FormHelperText } from "@chakra-ui/react";

interface DateFormProps {
    setDate: React.Dispatch<React.SetStateAction<Date | null>>;
    labelText: string;
    helperText: string;
}

const DateFormInput: React.FC<DateFormProps> = ({
    setDate,
    labelText,
    helperText,
}: DateFormProps) => {
    return (
        <>
            <FormLabel fontSize="1.3rem" marginTop="2rem">
                {labelText}
            </FormLabel>
            <Input
                type="date"
                onChange={(e: any) => setDate(e.target.valueAsDate)}
            />
            <FormHelperText>{helperText}</FormHelperText>
        </>
    );
};

export default DateFormInput;
