import Link from "../Link";
import styles from "./footer.module.css";

const FooterP1 = () => {
  const LINKS = [
    {
      url: "",
      label: "About",
    },
    {
      url: "",
      label: "Terms",
    },
    {
      url: "",
      label: "Privacy",
    },
    {
      url: "",
      label: "Contact ChatApp Support",
    },
    {
      url: "",
      label: "Docs",
    },
  ];
  return (
    <footer className={styles.Footer}>
      <ul className={styles.Links}>
        {LINKS.map((link, index) => (
          <li key={index} className={styles.Link}>
            <Link to={link.url}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default FooterP1;
