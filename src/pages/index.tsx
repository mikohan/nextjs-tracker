import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '~/components/Layout';

export default function Home() {
  return (
    <div>
      <Layout>
        <h1>My page</h1>
      </Layout>
    </div>
  );
}
