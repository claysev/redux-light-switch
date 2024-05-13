import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { store } from "./state/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const render = () => {
   root.render(
      <React.StrictMode>
         <App state={store.getState()} dispatch={store.dispatch} />
      </React.StrictMode>
   );
};

render();

store.subscribe(render);
