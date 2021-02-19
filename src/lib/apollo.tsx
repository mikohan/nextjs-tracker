//import ApolloClient from 'apollo-boost';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
//import { ApolloProvider } from '@apollo/react-hooks';

export function withApollo(PageComponent) {
  const WithApollo = (props: any) => {
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: 'http://localhost:3000/graphql',
        headers: {},
      }),
    });
    return (
      <ApolloProvider client={client}>
        <PageComponent {...props} />
      </ApolloProvider>
    );
  };
  return WithApollo;
}
