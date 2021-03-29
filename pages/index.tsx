import Link from "next/link";
import Head from "next/head";
import React from "react";

function Login(){
  return(
<div>
  <Head>
    <title>Login page</title>
  </Head>
  <body>
  <input
    placeholder="email@example.com"
  />
  <br/>
  <input
    placeholder="password"
  />
  <br/>
  <button>Login</button>
  <br/>
  Take me to <Link href="/register_page"> register </Link> new lemur
  </body>
</div>);}
export default Login;