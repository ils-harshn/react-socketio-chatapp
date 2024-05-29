import { useState } from "react";
import DNavbar from "../../components/Navbars/DNavbar";
import ThemeManager from "../../utils/themeManager";
import XButton from "../../components/Button/XButton/XButton";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../router/ROUTES";
import WebTokenStorer from "../../utils/webTokenStorer";
import notify from "../../utils/notify";
import { useDispatch } from "react-redux";
import { remove_user_data } from "../../store/actions/AuthActions/index.types";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(remove_user_data());
    WebTokenStorer.clear();
    navigate(ROUTES.LOGIN);
    notify.success("Logged out successfully");
  };
  return (
    <div>
      <XButton onClick={logout}>LOGOUT</XButton>
    </div>
  );
};

const ThemeChanger = () => {
  const [theme, setTheme] = useState(ThemeManager.get());
  const themes = ["light", "dark"];
  return (
    <div
      className="mb-16"
      style={{
        border: "1px solid rgb(40, 40, 40)",
        padding: "20px",
        borderRadius: "6px",
      }}
    >
      <h1>Select Theme</h1>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          marginTop: "16px",
        }}
      >
        {themes.map((th, index) => (
          <li
            key={index}
            style={{
              marginRight: "10px",
              fontWeight: th === theme ? "bolder" : "",
              cursor: "pointer",
            }}
            onClick={() => {
              let newTheme = themes[index];
              setTheme(newTheme);
              ThemeManager.set(newTheme);
              window.location.reload();
            }}
          >
            {th.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Settings = () => {
  return (
    <main>
      <DNavbar />
      <div
        style={{
          padding: "20px",
        }}
      >
        <ThemeChanger />

        <Logout />
      </div>
    </main>
  );
};

export default Settings;
