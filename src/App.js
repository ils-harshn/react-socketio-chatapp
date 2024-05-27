import { BaseQueryProvider } from "./api";
import Router from "./router";

function App() {
  return (
    <BaseQueryProvider>
      <Router />
    </BaseQueryProvider>
  );
}

export default App;
