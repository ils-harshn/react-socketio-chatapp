import styles from "./TextInput.module.css";

const TextInput = ({
  className,
  autoComplete = "off",
  size = "sm",
  ...props
}) => {
  return (
    <input
      className={`${className || ""} ${styles.textInput} ${size} ${
        props.width
      }`}
      autoComplete={autoComplete}
      {...props}
    ></input>
  );
};

export default TextInput;
