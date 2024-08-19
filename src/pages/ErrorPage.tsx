import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  console.log("error", error);
  return (
    <>
      <NavBar />
      <Box paddingX="1rem">
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error) ? "This page does not exist" : "Unexpected error occurred"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
