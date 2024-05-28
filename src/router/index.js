import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import Login from "../pages/login";
import Register from "../pages/register";
import Auth from "../Layout/Auth";
import BasicConfig from "./BasicConfig";
import VerifyEmail from "../pages/VerifyEmail";
import Dashboard from "../pages/dashboard";
import Protected from "../Layout/Protected";
import Settings from "../pages/settings";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BasicConfig />}>
          <Route element={<Auth />}>
            <Route element={<Register />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.REGISTER} element={<Register />} />
            <Route path={ROUTES.VERIFY_EMAIL} element={<VerifyEmail />} />
          </Route>

          <Route element={<Protected />}>
            <Route index element={<Dashboard />} />
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.SETTINGS} element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
