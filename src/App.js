import { useEffect } from "react";
import { BaseQueryProvider } from "./api";
import Router from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeManager from "./utils/themeManager";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  useEffect(() => {
    ThemeManager.set(ThemeManager.get());
  }, []);

  return (
    <BaseQueryProvider>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Router />
      </SkeletonTheme>
      <ToastContainer theme={ThemeManager.get()} />
    </BaseQueryProvider>
  );
}

export default App;
