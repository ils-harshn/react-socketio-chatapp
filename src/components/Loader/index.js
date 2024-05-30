import { useEffect, useState } from "react";
import styles from "./loader.module.css";

export const Spinner = () => {
  return <div className={`${styles.Spinner}`}></div>;
};

export const FullScreenLoader = () => {
  const [warn, setWarn] = useState("");

  useEffect(() => {
    const interval1 = setTimeout(() => {
      setWarn("WAIT");
    }, 2000);

    const interval2 = setTimeout(() => {
      setWarn("SERVERWAIT");
    }, 6000);

    const interval3 = setTimeout(() => {
      setWarn("RELOAD");
    }, 12000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className={`${styles.FullScreenLoader}`}>
      <div className="text-center">
        <div className="full-screen-jcenter">
          <Spinner />
        </div>
        {warn === "WAIT" ? (
          <p className="mt-16">Please wait</p>
        ) : warn === "SERVERWAIT" ? (
          <p className="mt-16">
            Please wait. The server is taking a longer time than usual.
          </p>
        ) : warn === "RELOAD" ? (
          <p className="mt-16">Lagata hai server fata.</p>
        ) : null}
      </div>
    </div>
  );
};
