import { useState } from "react";
import DNavbar from "../../components/Navbars/DNavbar";
import ThemeManager from "../../utils/themeManager";
import XButton from "../../components/Button/XButton/XButton";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../router/ROUTES";
import WebTokenStorer from "../../utils/webTokenStorer";

const Logout = () => {
  const navigate = useNavigate();
  const logout = () => {
    WebTokenStorer.clear();
    navigate(ROUTES.LOGIN);
  };
  return (
    <div>
      <XButton onClick={logout}>LOGOUT</XButton>
    </div>
  );
};

const ThemeChanger = () => {
  const [theme, setTheme] = useState(ThemeManager.get());
  const themes = ["light", "dark", "ano"];
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
