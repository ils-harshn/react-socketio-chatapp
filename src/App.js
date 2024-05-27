import { BaseQueryProvider } from "./api";
import Router from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BaseQueryProvider>
      <Router />
      <ToastContainer theme="dark" />
    </BaseQueryProvider>
  );
}

export default App;
