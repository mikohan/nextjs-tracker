import Layout from '~/components/Layout';
import { withApollo } from '~/lib/apollo';
import { useQuery } from '@apollo/react-hooks';

function Home() {
  return (
    <div>
      <Layout>
        <h1>My page</h1>
      </Layout>
    </div>
  );
}

export default withApollo(Home);
