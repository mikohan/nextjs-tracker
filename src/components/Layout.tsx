import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Super test component</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>

      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
