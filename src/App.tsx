import Canvas from "./components/Canvas/Canvas";
import Layout from "./components/Layout";
import Limbus from "./pages/Limbus";
import canvasStyle from "./components/Canvas/Canvas.module.scss";
import Title from "./components/Title/Title";
import styles from "./components/TextBox/TextBox.module.scss";
import TextBox from "./components/TextBox/TextBox";
import { useEffect, useState } from "react";

type windowProps = {
  width: number;
  height: number;
};

function App() {
  const [windowWidth, setWindowWidth] = useState<windowProps>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleListener = () => {
      setWindowWidth({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleListener);

    return () => {
      window.removeEventListener("resize", handleListener);
    };
  }, []);

  console.log(windowWidth);

  return (
    <Layout>
      {windowWidth.width >= 1300 && windowWidth.height >= 750 ? (
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
      ) : (
        <Limbus />
      )}
    </Layout>
  );
}

export default App;
