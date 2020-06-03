import React from "react";
import App from "next/app";
import Head from "next/head";
import link from "next/link";
import { Header } from "../components/index";

import Store from "../store/store";

import "../styles/index.scss";

const store = new Store();

class MyApp extends App {
  props: { Component: any; pageProps: any };
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/wA.svg" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>

          <meta name="Description" content="Author: Muhammed Deniz"></meta>

          <title>Ana Sayfa</title>
        </Head>
        <Header />

        <Component {...pageProps} myStore={store} />

        {/* <Footer /> */}
      </>
    );
  }
}

export default MyApp;
