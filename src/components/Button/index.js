import styles from "./button.module.css";

const Button = ({
  children,
  className,
  varient = "primary",
  width = "full",
  size = "md",
  ...props
}) => {
  return (
    <button
      className={`${className || ""} ${
        styles.Button
      } ${size} ${varient} ${width}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
