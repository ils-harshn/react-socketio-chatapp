import { Link as RRDLink, NavLink as RRNavlink } from "react-router-dom";
import styles from "./Link.module.css";

const Link = ({ className, size = "sm", children, ...props }) => {
  return (
    <RRDLink className={`${className || ""} ${styles.Link} ${size}`} {...props}>
      {children}
    </RRDLink>
  );
};

export const NavLink = ({ className, size = "sm", children, ...props }) => {
  return (
    <RRNavlink
      className={`${className || ""} ${styles.Link} ${size}`}
      {...props}
    >
      {children}
    </RRNavlink>
  );
};

export default Link;
