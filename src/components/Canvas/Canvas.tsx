import { ReactNode } from "react";
import styles from "./Canvas.module.scss";

export default function Canvas({ children }: { children: ReactNode }) {
  return <div className={styles.canvas}>{children}</div>;
}
