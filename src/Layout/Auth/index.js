import { Outlet, useLocation } from "react-router-dom";
import Logo from "../../assests/img/logo.png";
import styles from "./auth.module.css";
import FooterP1 from "../../components/Footer";
import ROUTES from "../../router/ROUTES";
import { useLayoutEffect } from "react";

const Auth = () => {
  const location = useLocation();
  const titles = {
    [ROUTES.REGISTER]: "Sign up with ChatApp",
    [ROUTES.LOGIN]: "Sign in with ChatApp",
    [ROUTES.VERIFY_EMAIL]: "Verify email for ChatApp",
  };

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <div className={`full-screen-jcenter`}>
        <div>
          <div className="text-center">
            <img src={Logo} className={styles.logo} alt="wow" />
          </div>
          <h1 className={`text-center ${styles.title}`}>
            {titles[location.pathname]}
          </h1>
          <Outlet />
        </div>
      </div>
      <FooterP1 />
    </>
  );
};

export default Auth;
