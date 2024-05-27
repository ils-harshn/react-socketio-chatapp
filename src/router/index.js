import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import Login from "../pages/login";
import Register from "../pages/register";
import Auth from "../Layout/Auth";
import BasicConfig from "./BasicConfig";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BasicConfig />}>
          <Route element={<Auth />}>
            <Route index element={<Register />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.REGISTER} element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
