import styles from "./Avatar.module.css";

export const FirstLetter = ({ className, title, ...props }) => {
  return (
    <div className={`${styles.FirstLetter} ${className}`} {...props}>
      {title[0]}
    </div>
  );
};
