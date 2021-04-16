import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
// import Layout from "../components/Layout";

function Login() {
  return (
    <Layout>
      <Head>
        <title>Test page</title>
      </Head>
      <body>
        <input placeholder="email@example.com" />
        <br />
        <input placeholder="password" />
        <br />
        <button>Login</button>
        <br />
      </body>
    </Layout>
  );
}
export default Login;
