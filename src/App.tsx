import Canvas from "./components/Canvas/Canvas";
import Layout from "./components/Layout";
import styles from "./components/Canvas/Canvas.module.scss";
import Title from "./components/Title/Title";

function App() {
  return (
    <Layout>
      <Canvas>
        <div className={styles.ring} />
        <Title />
      </Canvas>
    </Layout>
  );
}

export default App;
