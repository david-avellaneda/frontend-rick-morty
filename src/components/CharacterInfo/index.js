import styles from "./index.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ImageUploader from "../ImageUploader";

const CharacterInfo = ({ data }) => {
  const { name, image, gender, status, species, origin, location } = data;

  return (
    <>
      <section className={styles.back}>
        <Link href="/">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </Link>
      </section>
      <section className={styles.container} id="country">
        <div className={styles.image}>
          <ImageUploader
            src={image}
            alt={`Picture of ${name}`}
            background="var(--background)"
          />
        </div>
        <div className={styles.contentContainer}>
          <h2>{name || "Not established"}</h2>
          <div className={styles.text}>
            <div className={styles.textOne}>
              <p>
                Gender: <span>{gender || "Not established"}</span>
              </p>
              <p>
                Status: <span>{status || "Not established"}</span>
              </p>
              <p>
                Species: <span>{species || "Not established"}</span>
              </p>
              <p>
                Origin:{" "}
                <span>{(origin && origin.name) || "Not established"}</span>
              </p>
              <p>
                Location:{" "}
                <span>{(location && location.name) || "Not established"}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CharacterInfo;
