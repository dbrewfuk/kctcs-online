import { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Header from "./header";
import Home from "./Home";
import Programs from "./Programs";
import Admissions from "./Admissions";
import TuitionAndCost from "./TuitionAndCost";
import StudentSupportServices from "./StudentSupportServices";
import StudentStories from "./StudentStories";
import StoryPage from "./StoryPage";
import CurrentStudents from "./CurrentStudents";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
      <Route path="/student-stories" component={StudentStories} />
      <Route exact path="/stories/:id">
      <StoryPage />
      </Route>
    </Switch>

    </div>
    <footer className="py-5 border">
    <div className="container">
    <div className="d-flex flex-column gap-5 align-items-center">
    <div className="d-flex flex-column align-items-center gap-3">
    <h1 className="display-1 text-info">Start Your Online Journey Today!</h1>
    <div className="d-flex gap-2 align-items-center">
    <div className="btn rounded-pill btn-shadow btn-primary">Request Information</div>
<div className="btn rounded-pill btn-shadow btn-outline-dark">Explore Programs</div>
    </div>
    </div>
    <div className="d-flex flex-column align-items-center gap-4">
    <a className="" href="/"><img src="./assets/vertical-logo-dark.svg"/></a>
    <nav className="d-flex flex-column flex-md-row gap-3"><a className="text-info" href="/admissions">Admissions</a><a className="text-info" href="/tuition-and-cost">Tuition &amp; Cost</a><a className="text-info" href="/programs">Programs</a><a className="text-info" href="/student-support-services">Student Support Services</a></nav>
    </div>
    </div></div></footer>
    </Router>
    </div>
  );
}

export default App;
