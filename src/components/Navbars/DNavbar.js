import Logo from "../../assests/img/logo.png";
import XButton from "../Button/XButton/XButton";
import Link from "../Link";
import styles from "./DNavbar.module.css";

const DNavbar = () => {
  return (
    <nav className={`${styles.container}`}>
      <div className={`${styles.leftside}`}>
        <div className={`${styles.logocontainer}`}>
          <img alt="logo" src={Logo} className={`${styles.logo}`} />
          <div className={`${styles.appname}`}>ChatApp</div>
        </div>
        <ul className={`${styles.options}`}>
          <li>
            <Link>Features</Link>
          </li>
          <li>
            <Link>Settings</Link>
          </li>
          <li>
            <Link>Pricing</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.rightside}`}>
        <XButton>CREATE A NEW WORKSPACE</XButton>
      </div>
    </nav>
  );
};

export default DNavbar;
