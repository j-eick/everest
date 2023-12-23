import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <Layout>
      <h1>Contact</h1>
      <Link to={"/"}>home</Link>
    </Layout>
  );
}
