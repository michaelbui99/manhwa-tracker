import { Box, Button, Flex, list, Select } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import * as React from "react";
import { ManhwaList } from "../../models/manhwa-list/manhwa-list";
import { Navigate, useNavigate } from "react-router-dom";

const AddListEntry: React.FC = () => {
    const lists: ManhwaList[] = useSelector(
        (state: any) => state.manhwaLists.value
    );
    const user = useSelector((state: any) => state.user.value);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!user.isLoggedIn) {
            navigate("/login");
        }
    }, []);

    const [selectedList, setSelectedList] = React.useState<number>();

    const addListEntry = () => {};

    return (
        <Box className="content">
            <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Select
                    backgroundColor="#aaa"
                    onChange={(e) =>
                        setSelectedList(parseInt(e.currentTarget.value))
                    }
                >
                    {lists.length > 0 ? (
                        lists.map((list) => (
                            <option value={list.id}>{list.name}</option>
                        ))
                    ) : (
                        <option>No list has been created yet</option>
                    )}
                </Select>

                <Button>Add</Button>
            </Flex>
        </Box>
    );
};

export default AddListEntry;
