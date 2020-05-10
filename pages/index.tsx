import Head from "next/head";
import { NextPage } from "next";
import Title from "../components/Title";
import Header from "../components/Header";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Joseph Smith</title>
      </Head>
      <Header />
      <Title />
    </>
  );
};

export default Index;
