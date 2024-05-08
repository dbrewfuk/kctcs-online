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
// Render the StudentStoryFeature component into the container with ID "student-story-feature"
ReactDOM.createRoot(
  document.getElementById("oua-explore-programs") as HTMLElement,
).render(
  <React.StrictMode>
    <ExplorePrograms />
  </React.StrictMode>,
);

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
  document.getElementById("testimonial") as HTMLElement,
).render(
  <React.StrictMode>
    <Testimonial />
  </React.StrictMode>,
);

ReactDOM.createRoot(
  document.getElementById("oua-featured-areas") as HTMLElement,
).render(
  <React.StrictMode>
    <SFeaturedAreas />
  </React.StrictMode>,
);

// Render the StudentStoryFeature component into the container with ID "student-story-feature"
ReactDOM.createRoot(
  document.getElementById("a-ol-programs") as HTMLElement,
).render(
  <React.StrictMode>
    <Analytics />
    <Programs />
  </React.StrictMode>,
);

// Render the StudentStoryFeature component into the container with ID "student-story-feature"
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
