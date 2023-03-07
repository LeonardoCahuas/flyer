import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from "./App";
import {AppPages} from "../src/pages/AppPages"
import "./index.css";
const rootElement = document.getElementById("root");
// This opts into the new behavior!
ReactDOMClient.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
