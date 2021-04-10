import Link from "next/link";
import Head from "next/head";
import React from "react";
// import Layout from "../components/Layout";

function Login() {
  return (
    <div>
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
        Take me to <Link href="/register_page"> register </Link> new lemur
      </body>
    </div>
  );
}
export default Login;
