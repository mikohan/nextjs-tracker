import { ApolloServer, gql } from 'apollo-server-micro';
import connectDb from '../../lib/mongoose';
import { mergeResolvers, mergeTypeDefs } from 'graphql-toolkit';
import { habitsResolvers } from '~/pages/api/habits/resolvers';
import { habitsMutations } from '~/pages/api/habits/mutations';
const Habits = require('~/pages/api/habits/Habits.graphql');

console.log(process.env.MONGO_URL);

const fakeTypeDefs = gql`
  type Query {
    sayHello: String!
  }
`;
const typeDefs = mergeTypeDefs([fakeTypeDefs, Habits]);

const resolvers = {
  Query: {
    sayHello: () => {
      return 'Hello world!';
    },
  },
};
// const resolvers = mergeResolvers([
//   fakeResolvers,
//   habitsResolvers,
//   habitsMutations,
// ]);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = apolloServer.createHandler({ path: '/api/graphql' });

export default connectDb(server);
