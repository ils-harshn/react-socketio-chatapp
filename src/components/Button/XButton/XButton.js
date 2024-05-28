import styles from "./XButton.module.css";

const XButton = ({ children, className, ...props }) => {
  return (
    <button className={`${className || ""} ${styles.XButton}`} {...props}>
      {children}
    </button>
  );
};

export default XButton;
