import Layout from '~/components/Layout';
import { withApollo } from '~/lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

function Home() {
  const HELLO_QUERY = gql`
    query HelloQuery {
      sayHello
    }
  `;
  const { data, loading, error } = useQuery(HELLO_QUERY);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <Layout>
        <h1>My {JSON.stringify(data)}</h1>
      </Layout>
    </div>
  );
}

export default withApollo(Home);
