"use client";

import styles from "./index.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ImageUploader = ({ src, alt, background, color, custom }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.8 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const handleLoading = (e) => {
    isLoading
      ? setIsLoading(e.target.complete)
      : setTimeout(() => setIsLoading(e.target.complete), 300);
  };

  return (
    <div className={styles.container} ref={ref}>
      <div
        className={`${styles.loader} ${custom ? styles[custom] : ""}`}
        style={{
          display: isLoading ? "none" : "flex",
          background: background && background,
        }}
      >
        {!isLoading && (
          <div
            style={{
              borderColor: color && color,
            }}
          ></div>
        )}
      </div>
      <Image
        src={src}
        alt={alt}
        width={200}
        height={200}
        sizes="(min-width: 320px) 100vw, 100vw"
        quality={90}
        onLoad={handleLoading}
        style={{ display: isVisible ? "flex" : "none" }}
      />
    </div>
  );
};

export default ImageUploader;
