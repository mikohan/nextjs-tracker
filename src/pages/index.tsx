import Layout from '~/components/Layout';
import { withApollo } from '~/lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import HabitList from '../components/HabitList';
import HabitForm from '../components/HabitForm';

function Home() {
  const HELLO_QUERY = gql`
    query HelloQuery {
      sayHello
    }
  `;
  const USER = gql`
    {
      albums {
        data {
          id
          title
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(HELLO_QUERY);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <Layout>
        <h1>Some stuff</h1>
        <HabitForm />
        <HabitList />
      </Layout>
    </div>
  );
}

export default withApollo(Home);
