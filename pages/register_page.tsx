import React, { useState } from "react";
import { useRef } from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  const [error, setError] = useState<string>();

  const sendData = async () => {
    setError("");
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        email: refEmail?.current?.value,
        password: refPassword?.current?.value,
      }),
    });
    if (res.status === 400) {
      setError(await res.text());
    }
  };

  const refEmail = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);

  return (
    <Layout title="Register page">
      <label>
        <input
          type="email"
          name="email"
          ref={refEmail}
          placeholder="test@example.com"
        />
      </label>
      <br />
      <input
        type="password"
        name="password"
        ref={refPassword}
        placeholder="password"
      />
      <br />
      <div>{error}</div>
      <button onClick={sendData}>Register</button>
      <br />
    </Layout>
  );
};

export default IndexPage;
