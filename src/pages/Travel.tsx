import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Travel() {
  return (
    <Layout>
      <h1>Travel</h1>
      <Link to={"/"}>home</Link>
    </Layout>
  );
}
