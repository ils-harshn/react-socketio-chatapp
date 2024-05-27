import { Outlet, useLocation } from "react-router-dom";
import Logo from "../../assests/img/logo.png";
import styles from "./auth.module.css";
import FooterP1 from "../../components/Footer";
import ROUTES from "../../router/ROUTES";

const Auth = () => {
  const location = useLocation();
  return (
    <>
      <div className={`full-screen-jcenter`}>
        <div>
          <div className="text-center">
            <img src={Logo} className={styles.logo} alt="wow" />
          </div>
          <h1 className={`text-center ${styles.title}`}>
            {location.pathname === ROUTES.REGISTER
              ? "Sign up with ChatApp"
              : "Sign in with Chat App"}
          </h1>
          <Outlet />
        </div>
      </div>
      <FooterP1 />
    </>
  );
};

export default Auth;
