import { useEffect } from "react";
import styles from "../styles/toggle_dark_mode.module.css";

export default function ToggleDarkMode({}: {}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentTheme = window.localStorage.getItem("theme");

      if (currentTheme == "dark-mode") {
        document.getElementById("main").classList.add("dark-mode");
        document.getElementById("main").classList.remove("light-mode");
      }
    }
  }, []);

  return (
    <div className={styles.btn}>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol
          id="moon"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </symbol>
        <symbol
          id="sun"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </symbol>
      </svg>
      <button
        className="dark--hidden"
        aria-label="Toggle dark mode"
        onClick={() => ToggleButton()}
      >
        <svg aria-hidden="true">
          <use href="#moon"></use>
        </svg>
      </button>
      <button
        className="light--hidden"
        aria-label="Toggle light mode"
        onClick={() => ToggleButton()}
      >
        <svg aria-hidden="true">
          <use href="#sun"></use>
        </svg>
      </button>
    </div>
  );
}

export function ToggleButton() {
  const main = document.getElementById("main");
  main.classList.toggle("dark-mode");
  main.classList.toggle("light-mode");

  let theme = "light-mode";
  if (main.classList.contains("dark-mode")) {
    theme = "dark-mode";
  }

  window.localStorage.setItem("theme", theme);
}
