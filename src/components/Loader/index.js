import styles from "./loader.module.css";

export const Spinner = () => {
  return <div className={`${styles.Spinner}`}></div>;
};

export const FullScreenLoader = () => {
  return (
    <div className={`${styles.FullScreenLoader}`}>
      <Spinner />
    </div>
  );
};
