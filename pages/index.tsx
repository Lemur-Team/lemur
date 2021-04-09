import { useRef } from "react";
import Layout from "../components/Layout";

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

export default IndexPage;
