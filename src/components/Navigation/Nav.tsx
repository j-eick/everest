import React from "react";
import navCategories from "../../utils/navCategories.json";
import styles from "./Component.module.scss";

export default function Nav() {
  const clickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log(e.currentTarget);
    console.log("ad");
  };

  return (
    <ul className={styles.ul}>
      {navCategories.map((item) => (
        <li className={styles.li} key={item.name} onClick={clickHandler}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
