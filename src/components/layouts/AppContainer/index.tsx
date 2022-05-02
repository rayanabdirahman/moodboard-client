import React from "react";
import Navbar from "../../atoms/Navbar";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

const AppContainer: React.FC<Props> = ({ children }) => (
  <>
    <Head>
      <title>Moodboard | Shop your local stores</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Navbar />
      {children}
    </main>
  </>
);

export default AppContainer;
