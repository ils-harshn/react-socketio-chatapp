import styles from "./TextInput.module.css";

const TextInput = ({ className, size = "sm", ...props }) => {
  return (
    <input
      className={`${className || ""} ${styles.textInput} ${size} ${
        props.width
      }`}
      {...props}
    ></input>
  );
};

export default TextInput;
