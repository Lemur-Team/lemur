import React from "react";

const LogoutButton = (props: { onDone: () => any }) => {
  const onDone = props.onDone;
  const logout = async () => {
    await fetch("/api/logout");
    console.log("Odhlasuj");
    onDone();
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
