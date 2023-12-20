import Canvas from "./components/Canvas/Canvas";
import Layout from "./components/Layout";
import canvasStyle from "./components/Canvas/Canvas.module.scss";
import Title from "./components/Title/Title";
import styles from "./components/TextBox/TextBox.module.scss";
import TextBox from "./components/TextBox/TextBox";

function App() {
  return (
    <Layout>
      <Canvas>
        <div className={canvasStyle.ring} />
        <TextBox>
          <Title />
          <span className={styles.divider}></span>
          <svg height="210" width="500" className={styles.divider}>
            <line
              x1="0"
              y1="0"
              x2="350"
              y2="0"
              style={{
                stroke: "rgb(255, 255, 255)",
                strokeWidth: "2",
              }}
            />
          </svg>
          <p className={styles.subtitle}>NEPAL</p>
        </TextBox>
      </Canvas>
    </Layout>
  );
}

export default App;
