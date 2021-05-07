import { useRef } from "react";
import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
// import Layout from "../components/Layout";

const IndexPage = () => {
  const loginEl = useRef<HTMLInputElement>(null);
  const passwordEl = useRef<HTMLInputElement>(null);
  const sendData = () => {
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        login: loginEl?.current?.value,
        password: passwordEl?.current?.value,
      }),
    });
    console.log("Odesilam data");
  };
  return (
    <Layout title="Parking Lots">
      <h1>Available spots</h1>
      <ul>
        <li>84.</li>
        <li>85.</li>
        <li>86.</li>
        <li>87.</li>
      </ul>
      <label>
        Login: <input ref={loginEl} />
      </label>
      <br />
      <label>
        Password: <input ref={passwordEl} />
      </label>
      <br />
      <button onClick={sendData}>Login</button>
    </Layout>
  );
};
function Login() {
  return (
    <Layout>
      <Head>
        <title>Test page</title>
      </Head>

      <input placeholder="email@example.com" />
      <br />
      <input placeholder="password" />
      <br />
      <button>Login</button>
      <br />
    </Layout>
  );
}
export default Login;
