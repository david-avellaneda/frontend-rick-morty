import Card from "../Card";
import Err from "../Err";
import styles from "./index.module.css";

const Characters = ({ data }) => {
  return (
    <section className={styles.container}>
      {data && data.length && data.map((el) => <Card key={el.id} {...el} />)}

      {!data.length && (
        <>
          <Err
            msg={"An error has ocurred, the characters could not be obtained"}
          />
        </>
      )}
    </section>
  );
};

export default Characters;
