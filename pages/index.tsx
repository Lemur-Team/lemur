import React from "react";
import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";
import LogoutButton from "../components/LogoutButton";
import useSWR from "swr";

const IndexPage = () => {
  const { error, data, mutate } = useSWR("api/data");
  if (error) {
    return "Error " + error;
  }
  if (!data) {
    return "Loading...";
  }
  if (data.user) {
    return (
      <Layout title="Parking Lots">
        ses vevnitr, <LogoutButton onDone={mutate} />
      </Layout>
    );
  }
  return (
    <Layout title="Parking Lots">
      <LoginForm onDone={mutate} />
    </Layout>
  );
};

export default IndexPage;
