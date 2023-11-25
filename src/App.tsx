import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Home-alt";
import Programs from "./Programs";
import Admissions from "./Admissions";
import Rfi from "./components/Rfi";
import TuitionAndCost from "./TuitionAndCost";
import StudentSupportServices from "./StudentSupportServices";
import CurrentStudents from "./CurrentStudents";

import "./App.css";

function App() {
  return (
    <div>
      <Router basename="./">
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/programs">
              <Programs />
            </Route>
            <Route path="/admissions">
              <Admissions />
            </Route>
            <Route path="/tuition-and-cost">
              <TuitionAndCost />
            </Route>
            <Route path="/student-support-services">
              <StudentSupportServices />
            </Route>
            <Route path="/current-students">
              <CurrentStudents />
            </Route>
          </Switch>
        </div>
      </Router>

      <Footer />
      <Rfi />
    </div>
  );
}

export default App;
