"use client";

import styles from "./index.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const WelcomeScreen = () => {
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (show) document.body.classList.remove("no-scroll");
  }, [show]);

  useEffect(() => {
    const hide = setTimeout(() => setHidden(true), 1500);
    const remove = setTimeout(() => setShow(true), 2000);

    return () => clearTimeout(hide, remove);
  }, []);

  return (
    <>
      {!show && (
        <div className={`${styles.container} ${hidden && styles.hidden}`}>
          <div className={styles.logo}>
            <Image
              src="/rick-morty.webp"
              alt="Rick and morty"
              width={600}
              height={600}
              priority
              className={styles.animation}
            />
            <p>
              <span>Rick</span>
              <span>Morty</span>
            </p>
          </div>
          <p className={styles.copy}>Copyright © 2023 David Avellaneda</p>
        </div>
      )}
    </>
  );
};

export default WelcomeScreen;
