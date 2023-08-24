import styles from "./index.module.css";

const Err = ({ msg }) => {
  return <div className={styles.container}>{msg && <p>{msg}</p>}</div>;
};

export default Err;
