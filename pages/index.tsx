import Head from "next/head";
import { NextPage } from "next";
import Title from "../components/Title";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Joseph Smith</title>
      </Head>
      <Header />
      <Title />
      <Footer />
    </>
  );
};

export default Index;
