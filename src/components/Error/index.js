import styles from "./error.module.css";

const FormInputError = ({ className, children, size = "sm", ...props }) => {
  return (
    <p className={`${className} ${styles.FormInputError} ${size}`} {...props}>
      {children}
    </p>
  );
};

export default FormInputError;
