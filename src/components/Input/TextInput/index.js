import styles from "./TextInput.module.css";

const TextInput = ({ size = "sm", ...props }) => {
  return (
    <input
      className={`${props.className} ${styles.textInput} ${size} ${props.width}`}
      {...props}
    ></input>
  );
};

export default TextInput;
