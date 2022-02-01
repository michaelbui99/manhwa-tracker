import * as React from "react";
import { ManhwaList } from "../../models/manhwa-list/manhwa-list";
import { ListItem, ListIcon, Button } from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";

interface ManhwaListDrawerItemProps {
    manhwaList: ManhwaList;
}

export const ManhwaListDrawerItem: React.FC<ManhwaListDrawerItemProps> = ({
    manhwaList,
}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleItemClick = () => {
        setExpanded(!expanded);
    };

    return (
        <ListItem
            cursor="pointer"
            listStyleType="none"
            width="100%"
            textAlign="center"
            onClick={handleItemClick}
        >
            <Button
                leftIcon={expanded ? <TriangleUpIcon /> : <TriangleDownIcon />}
                colorScheme="teal"
                variant="ghost"
                width="100%"
            >
                {manhwaList.name}
            </Button>
        </ListItem>
    );
};
