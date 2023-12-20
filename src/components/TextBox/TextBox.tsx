import { ReactNode } from "react";
import styles from "./TextBox.module.scss";

export default function TextBox({ children }: { children: ReactNode }) {
  return <div className={styles.textbox}>{children}</div>;
}
