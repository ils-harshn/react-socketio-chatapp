import { Link as RRDLink } from "react-router-dom";
import styles from "./Link.module.css";

const Link = ({ className, size = "sm", children, ...props }) => {
  return (
    <RRDLink className={`${className || ""} ${styles.Link} ${size}`} {...props}>
      {children}
    </RRDLink>
  );
};

export default Link;
