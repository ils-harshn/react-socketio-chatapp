import styles from "./Avatar.module.css";

export const FirstLetter = ({ className, title, size, ...props }) => {
  return (
    <div
      className={`${styles.FirstLetter} ${className || ""} ${size || ""}`}
      {...props}
    >
      {title[0]}
    </div>
  );
};
