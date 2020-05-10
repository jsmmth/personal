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
      <Title>
        Watch me code this on <a href="https://youtu.be/ON_0tqGTNyE">YouTube</a>
      </Title>
    </>
  );
};

export default Index;
