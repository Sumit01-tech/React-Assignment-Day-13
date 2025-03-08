import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/Actions";
import { Link } from "react-router-dom";
import { Box, Spinner, List, ListItem } from "@chakra-ui/react";

const HomePage = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) return <Spinner size="xl" />;
    if (error) return <Box color="red.500">Error: {error}</Box>;

    return (
        <Box p={5}>
            <List spacing={3}>
                {users.map((user) => (
                    <ListItem key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.name}</Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default HomePage;
