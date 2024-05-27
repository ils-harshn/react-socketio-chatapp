import styles from "./Label.module.css";

const Label = ({ className, children, size = "sm", ...props }) => {
  return (
    <label className={`${className || ""} ${styles.label} ${size}`} {...props}>
      {children}
    </label>
  );
};

export default Label;
