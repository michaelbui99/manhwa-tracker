import * as React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./index.css";
import App from "./App";

const token = sessionStorage.getItem("token");

const client = new ApolloClient({
    uri: "https://localhost:8080/graphql",
    cache: new InMemoryCache(),
    headers: {
        authorization: token ? `Bearer ${token}` : "",
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
