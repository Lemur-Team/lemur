import { useRef } from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  const sendData = () =>
    fetch("/api/data", {
      method: "POST",
      body: JSON.stringify({
        email: refEmail?.current?.value,
        password: refPassword?.current?.value,
      }),
    });

  const refEmail = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);

  return (
    <Layout title="Parking Lots">
      <h1>Available spots</h1>
      <ul>
        <li>84.</li>
        <li>85.</li>
        <li>86.</li>
        <li>87.</li>
      </ul>

      <input
        type="email"
        name="email"
        ref={refEmail}
        placeholder="test@example.com"
      />
      <br />
      <input
        type="password"
        name="password"
        ref={refPassword}
        placeholder="password"
      />
      <br />
      <button onClick={sendData}>Register</button>
    </Layout>
  );
};

export default IndexPage;
