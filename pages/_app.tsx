import App from "next/app";
import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import { StateProvider } from "common/store";

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StateProvider>
        <Layout>
          <Head>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </StateProvider>
    );
  }
}

export default CustomApp;
