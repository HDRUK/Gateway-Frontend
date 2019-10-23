import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { printIntrospectionSchema } from 'graphql';

const client = new ApolloClient({ uri: 'https://48p1r2roz4.sse.codesandbox.io' });

const ApolloApp = props => (
  <ApolloProvider client={client}>
    {props.children}
  </ApolloProvider>
);

export default ApolloApp;