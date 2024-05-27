import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h2>Hello</h2>} />
        <Route path={ROUTES.LOGIN} element={<h2>Hello</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
