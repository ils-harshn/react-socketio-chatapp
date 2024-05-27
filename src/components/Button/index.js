import styles from "./button.module.css";

const Button = ({
  children,
  className,
  varient = "primary",
  width = "full",
  size = "md",
}) => {
  return (
    <button
      className={`${className || ""} ${
        styles.Button
      } ${size} ${varient} ${width}`}
    >
      {children}
    </button>
  );
};

export default Button;
