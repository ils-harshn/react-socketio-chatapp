import { useNavigate } from "react-router-dom";
import Logo from "../../assests/img/logo.png";
import ROUTES from "../../router/ROUTES";
import { NavLink } from "../Link";
import styles from "./DNavbar.module.css";
import CreateChannelModal from "../Modals/CreateChannelModal";
import { useEffect, useRef } from "react";

const DNavbar = () => {
  const navigate = useNavigate();

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 100) {
          navRef.current.classList.add(styles.scrolledNav);
        } else {
          navRef.current.classList.remove(styles.scrolledNav);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-80">
      <nav ref={navRef} className={`${styles.container}`}>
        <div className={`${styles.leftside}`}>
          <div
            className={`${styles.logocontainer}`}
            onClick={() => navigate(ROUTES.DASHBOARD)}
          >
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
          <CreateChannelModal />
        </div>
      </nav>
    </div>
  );
};

export default DNavbar;
