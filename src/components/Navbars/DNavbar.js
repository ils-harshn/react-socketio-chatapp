import Logo from "../../assests/img/logo.png";
import ROUTES from "../../router/ROUTES";
import XButton from "../Button/XButton/XButton";
import { NavLink } from "../Link";
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
            <NavLink to="unko">Features</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.SETTINGS}>Settings</NavLink>
          </li>
          <li>
            <NavLink to="unko">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="unko">About Us</NavLink>
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
