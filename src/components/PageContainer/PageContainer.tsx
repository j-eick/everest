import { ReactNode } from "react";
import styles from "./PageContainer.module.scss";

export default function PageContainer({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
