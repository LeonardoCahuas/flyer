import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from "./App";
import "./index.css";
const rootElement = document.getElementById("root");
// This opts into the new behavior!
ReactDOMClient.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
