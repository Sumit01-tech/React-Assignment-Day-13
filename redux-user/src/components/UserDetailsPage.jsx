import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Text, Button } from "@chakra-ui/react";

const UserDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const user = useSelector((state) =>
        state.users.find((user) => user.id === parseInt(id))
    );

    if (!user) return <Text>User not found!</Text>;

    return (
        <Box p={5}>
            <Text fontSize="xl" fontWeight="bold">{user.name}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Phone: {user.phone}</Text>
            <Text>Address: {user.address.street}, {user.address.city}</Text>
            <Button mt={4} onClick={() => navigate("/")}>Back to Home</Button>
        </Box>
    );
};

export default UserDetailsPage;
