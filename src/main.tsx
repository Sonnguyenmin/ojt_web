import ReactDOM from "react-dom/client";

//Enable i18n
import "./config/i18n/i18n.ts";
import "./index.css";

//Add root file
import App from "./App.tsx";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <App />
      {/* <RouterProvider router={routes} /> */}
    </Provider>
  </>
);
