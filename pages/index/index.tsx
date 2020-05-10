import Head from "next/head";
import { NextPage } from "next";
import { HeadingText } from "./styles";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Joseph Smith</title>
      </Head>
      <HeadingText>
        Watch me code this on <a href="https://youtu.be/ON_0tqGTNyE">YouTube</a>
      </HeadingText>
    </>
  );
};

export default Index;
