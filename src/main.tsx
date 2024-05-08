// main.tsx file
import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Home-alt";
import Admissions from "./Admissions";
import Programs from "./Programs-v2";
import "./index.scss";

if (document.getElementById("home-root")) {
  ReactDOM.createRoot(
    document.getElementById("home-root") as HTMLElement,
  ).render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
  );
}

if (document.getElementById("admissions-root")) {
  ReactDOM.createRoot(
    document.getElementById("admissions-root") as HTMLElement,
  ).render(
    <React.StrictMode>
      <Admissions />
    </React.StrictMode>,
  );
}

if (document.getElementById("programs-root")) {
  ReactDOM.createRoot(
    document.getElementById("programs-root") as HTMLElement,
  ).render(
    <React.StrictMode>
      <Programs />
    </React.StrictMode>,
  );
}
