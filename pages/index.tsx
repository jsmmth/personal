import Head from "next/head";
import { NextPage } from "next";
import Title from "../components/Title";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Joseph Smith</title>
      </Head>
      <Title>
        Watch me code this on <a href="https://youtu.be/ON_0tqGTNyE">YouTube</a>
      </Title>
    </>
  );
};

export default Index;
