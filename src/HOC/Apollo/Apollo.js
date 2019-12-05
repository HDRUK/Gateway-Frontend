import React from "react";
import PropTypes from "prop-types";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { ApolloProvider } from "react-apollo";

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPH_QL_ENDPOINT
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("token");
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

const ApolloApp = props => <ApolloProvider client={client}>{props.children}</ApolloProvider>;

ApolloApp.propTypes = {
    children: PropTypes.node
};

export default ApolloApp;
