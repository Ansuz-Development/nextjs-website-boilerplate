import React from "react";
import {Html, Main, NextScript, Head} from "next/document";

const MyDocument = () => (
  <Html lang="en">
    <Head >
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#000000" />

      <meta name="description" content="" />
      <meta name="author" content="AnsuzDev" />
      <meta name="copyright" content="AnsuzDev"/>

      {/* <link rel="apple-touch-icon" sizes="180x180" href="/img/brand/apple-touch-icon.png"/> */}
      {/* <link rel="icon" type="image/png" sizes="32x32" href="/img/brand/favicon-32x32.png"/> */}
      {/* <link rel="icon" type="image/png" sizes="16x16" href="/img/brand/favicon-16x16.png"/> */}

      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body className="antialiased">
      <div id="page-transition" />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
