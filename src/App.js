import { useEffect } from "react";
import { BaseQueryProvider } from "./api";
import Router from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeManager from "./utils/themeManager";

function App() {
  useEffect(() => {
    ThemeManager.set(ThemeManager.get());
  }, []);

  return (
    <BaseQueryProvider>
      <Router />
      <ToastContainer theme={ThemeManager.get()} />
    </BaseQueryProvider>
  );
}

export default App;
