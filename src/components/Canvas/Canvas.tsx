import { ReactNode } from "react";
import styles from "./Canvas.module.scss";
import classNames from "classnames";

export default function Canvas({ children }: { children: ReactNode }) {
  const classes = classNames(styles.canvas);

  return <div className={classes}>{children}</div>;
}
