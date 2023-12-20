import Canvas from "./components/Canvas/Canvas";
import Layout from "./components/Layout";
import PageContainer from "./components/PageContainer/PageContainer";
import Title from "./components/Title/Title";

function App() {
  return (
    <Layout>
      <Canvas>
        <Title />
      </Canvas>
    </Layout>
  );
}

export default App;
