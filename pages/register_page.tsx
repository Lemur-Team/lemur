import Link from "next/link";
import Head from "next/head";
import React from "react";
import { useRef } from "react";

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
    <div>
      <Head>
        <title>Register page</title>
      </Head>
      <body>
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
        <button onClick={sendData}>Register</button>
        <br />
        Take me to <Link href="/"> login </Link> page
      </body>
    </div>
  );
};

export default IndexPage;
