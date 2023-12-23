import React from "react";
import navCategories from "../../utils/navCategories.json";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

export default function Nav() {
  const clickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log(e.currentTarget);
  };

  return (
    <ul className={styles.ul}>
      {navCategories.map((item) => (
        <li className={styles.li} key={item.id} onClick={clickHandler}>
          <Link className={styles.a} to={item.url}>
            {item.name}
            <span className={styles.line} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
