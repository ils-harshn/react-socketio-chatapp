import { useState } from "react";
import DNavbar from "../../components/Navbars/DNavbar";
import ThemeManager from "../../utils/themeManager";

const ThemeChanger = () => {
  const [theme, setTheme] = useState(ThemeManager.get());
  const themes = ["light", "dark", "ano"];
  return (
    <div>
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
      </div>
    </main>
  );
};

export default Settings;
