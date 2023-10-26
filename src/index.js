import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./Context/AppContext";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //appcontext provider ka children app hai
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
