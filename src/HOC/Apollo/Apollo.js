import React from "react";
import PropTypes from "prop-types";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({ uri: process.env.REACT_APP_GRAPH_QL_ENDPOINT });

const ApolloApp = props => <ApolloProvider client={client}>{props.children}</ApolloProvider>;

ApolloApp.propTypes = {
    children: PropTypes.node
};

export default ApolloApp;
