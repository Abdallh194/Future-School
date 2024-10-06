import { createRoot } from "react-dom/client";
import "./Styles/index.css";
import AppRouter from "@routes/AppRouter";
import { Provider } from "react-redux";
import { store } from "@Redux/store";
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
