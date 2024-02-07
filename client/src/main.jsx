import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles.jsx";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Progress } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles>
      <Provider store={store}>
        <PersistGate
          loading={<Progress type="circle" percent={75} />}
          persistor={persistor}
        >
          <App />
        </PersistGate>
      </Provider>
    </GlobalStyles>
  </React.StrictMode>,
);
