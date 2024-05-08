import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Analytics } from "@vercel/analytics/react";
import "./index.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Programs from "./Programs-v2";
import StudentStoryFeature from "./components/StudentStoryFeature";
import SFeaturedAreas from "./SFeaturedAreas";
import Testimonial from "./components/Testimonial";
import ExplorePrograms from "./components/ExplorePrograms";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
