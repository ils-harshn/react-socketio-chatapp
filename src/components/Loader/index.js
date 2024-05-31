import { useEffect, useState } from "react";
import styles from "./loader.module.css";

export const Spinner = () => {
  return <div className={`${styles.Spinner}`}></div>;
};

export const FullScreenLoader = ({ warns = [] }) => {
  const [warn, setWarn] = useState("");

  useEffect(() => {
    const intervals = warns.map((item) =>
      setTimeout(() => {
        setWarn(item.message);
      }, item.time)
    );
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [warns]);

  return (
    <div className={`${styles.FullScreenLoader}`}>
      <div className="text-center">
        <div className="full-screen-jcenter">
          <Spinner />
        </div>
        {warn ? <p className="mt-16">{warn}</p> : <></>}
      </div>
    </div>
  );
};
