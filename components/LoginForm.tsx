import { useRef } from "react";
import React from "react";
import Link from "next/link";

const LoginForm = (props: { onDone: () => any }) => {
  const onDone = props.onDone;
  const loginEl = useRef<HTMLInputElement>(null);
  const passwordEl = useRef<HTMLInputElement>(null);
  const sendData = async () => {
    await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        login: loginEl?.current?.value,
        password: passwordEl?.current?.value,
      }),
    });
    console.log("Odesilam data");
    onDone();
  };
  return (
    <div>
      <h2>Login:</h2>
      <label>
        Login: <input ref={loginEl} type="email" />
      </label>
      <br />
      <label>
        Password: <input ref={passwordEl} type="password" />
      </label>
      <br />
      <button onClick={sendData}>Login</button>
      <Link href="/register_page"> register </Link>
    </div>
  );
};

export default LoginForm;
