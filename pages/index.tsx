import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Parking Lots">
    <h1>Available spots</h1>
    <ul>
      <li>84.</li>
      <li>85.</li>
      <li>86.</li>
      <li>87.</li>
    </ul>

    <form action="/api/data" method="POST">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="test@example.com"
      />
      <br />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <br />
      <button type="submit">Register</button>
    </form>
  </Layout>
);

export default IndexPage;
