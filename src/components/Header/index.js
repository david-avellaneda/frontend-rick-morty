"use client";

import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(undefined);

  useEffect(() => {
    const getInitialMode = () => {
      const preferenceMode = window.localStorage.getItem("theme");
      const systemModePreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      if (preferenceMode && typeof preferenceMode === "string")
        return preferenceMode;

      if (
        systemModePreference &&
        typeof systemModePreference.matches === "boolean"
      )
        return systemModePreference.matches ? "dark" : "light";

      return "light";
    };

    const currentMode = getInitialMode();

    if (currentMode === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }

    const root = document.documentElement.dataset.theme;
    root && root === "dark" ? setTheme(true) : setTheme(false);
  }, []);

  useEffect(() => {
    if (theme !== undefined) {
      if (theme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [theme]);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <h1>Rick and Morty</h1>
        <button
          className={`${styles.themeButton}`}
          onClick={() => setTheme(!theme)}
        >
          <div>
            {theme !== undefined &&
              (theme ? (
                <>
                  <FontAwesomeIcon icon={faMoon} />
                  Dark Mode
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faSun} />
                  Light Mode
                </>
              ))}
          </div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
