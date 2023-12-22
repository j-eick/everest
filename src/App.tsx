import Canvas from "./components/Canvas/Canvas";
import Layout from "./components/Layout";
import Limbus from "./pages/Limbus";
import canvasStyle from "./components/Canvas/Canvas.module.scss";
import Title from "./components/Title/Title";
import styles from "./components/TextBox/TextBox.module.scss";
import TextBox from "./components/TextBox/TextBox";
import { useEffect, useState } from "react";
import Nav from "./components/Navigation/Nav";
import { BrowserRouter, Router, Route } from "react-router-dom";

type windowProps = {
  width: number;
  height: number;
};

function App() {
  const [windowSize, setWindowSize] = useState<windowProps>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleListener = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleListener);

    return () => {
      window.removeEventListener("resize", handleListener);
    };
  }, []);

  console.log(windowSize);

  return (
    <Layout>
      {windowSize.width >= 1300 && windowSize.height >= 750 ? (
        <Canvas>
          <Nav />
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
      ) : (
        <Limbus windowSize={windowSize} />
      )}
    </Layout>
  );
}

export default App;
