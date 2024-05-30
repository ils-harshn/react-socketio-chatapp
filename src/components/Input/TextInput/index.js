import styles from "./TextInput.module.css";

const TextInput = ({
  className,
  innerRef,
  autoComplete = "off",
  size = "sm",
  ...props
}) => {
  return (
    <input
      ref={innerRef}
      className={`${className || ""} ${styles.textInput} ${size} ${
        props.width
      }`}
      autoComplete={autoComplete}
      {...props}
    ></input>
  );
};

export default TextInput;
