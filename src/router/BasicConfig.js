import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ROUTES_TITLE } from "./ROUTES";

const BasicConfig = () => {
  const path = useLocation().pathname;

  useEffect(() => {
    document.title = ROUTES_TITLE[path] || "Register";
  }, [path]);

  return <Outlet />;
};

export default BasicConfig;
