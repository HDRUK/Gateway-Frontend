import React from "react";
import PropTypes from "prop-types";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors)
                graphQLErrors.forEach(({ message, locations, path }) =>
                    console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
                );
            if (networkError) console.log(`[Network error]: ${networkError}`);
        }),
        new HttpLink({
            uri: process.env.REACT_APP_GRAPH_QL_ENDPOINT,
            credentials: "same-origin"
        })
    ]),
    cache: new InMemoryCache()
});

const ApolloApp = props => <ApolloProvider client={client}>{props.children}</ApolloProvider>;

ApolloApp.propTypes = {
    children: PropTypes.node
};

export default ApolloApp;
