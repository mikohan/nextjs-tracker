import Head from 'next/head';
import { Container } from '@material-ui/core';
//import Navbar from './AppBar';

const Layout = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Super test component</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>

      <footer>Footer</footer>
    </Container>
  );
};

export default Layout;
