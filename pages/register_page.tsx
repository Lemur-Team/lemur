import React, { useState } from "react";
import { useRef } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const IndexPage = () => {
  const router = useRouter();
  const [error, setError] = useState<string>();

  const sendData = async () => {
    setError("");
    const email = refEmail?.current?.value;

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        password: refPassword?.current?.value,
      }),
    });
    if (res.status === 200) {
      router.push("/");
    } else {
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
