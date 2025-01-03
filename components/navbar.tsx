'use client'

import styles from "../styles/navbar.module.css";
import ToggleDarkMode from "./toggle_dark_mode";

export default function Navbar({}: {}) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}></div>
      <div className={styles.navbarRight}>
        <ToggleDarkMode></ToggleDarkMode>
      </div>
    </nav>
  );
}
