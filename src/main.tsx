import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Programs from "./Programs-v2";
import StudentStoryFeature from "./components/StudentStoryFeature";

// Render the StudentStoryFeature component into the container with ID "student-story-feature"
ReactDOM.createRoot(
  document.getElementById("student-story-feature") as HTMLElement,
).render(
  <React.StrictMode>
    <StudentStoryFeature />
  </React.StrictMode>,
);

// Render the StudentStoryFeature component into the container with ID "student-story-feature"
ReactDOM.createRoot(
  document.getElementById("a-ol-programs") as HTMLElement,
).render(
  <React.StrictMode>
    <Programs />
  </React.StrictMode>,
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
