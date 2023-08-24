import styles from "./index.module.css";
import ImageUploader from "../ImageUploader";
import Link from "next/link";

const Card = ({ id, name, image, status, species, location }) => {
  return (
    <article className={styles.card}>
      <Link href={id}>
        <div className={styles.image}>
          <ImageUploader src={image} alt={`Picture of ${name}`} />
        </div>
        <div className={styles.cardContent}>
          <h2>{name}</h2>
          <div className={styles.cardContentText}>
            <p>
              Status: <span>{status || "Not established"}</span>
            </p>
            <p>
              Species: <span>{species || "Not established"}</span>
            </p>
            <p>
              Location: <span>{location.name || "Not established"}</span>
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Card;
