import * as React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./reducers/user";
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

const store = configureStore({
    reducer: { user: userReducer },
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ApolloProvider client={client}>
                <ChakraProvider>
                    <AnimatePresence exitBeforeEnter intial={true}>
                        <App />
                    </AnimatePresence>
                </ChakraProvider>
            </ApolloProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
