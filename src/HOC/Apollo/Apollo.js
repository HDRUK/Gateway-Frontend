import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({ uri: process.env.REACT_APP_GRAPH_QL_ENDPOINT });

const ApolloApp = props => (
  <ApolloProvider client={client}>
    {props.children}
  </ApolloProvider>
);

export default ApolloApp;