import { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Home from "./Home";
import Programs from "./Programs";
import Admissions from "./Admissions";
import TuitionAndCost from "./TuitionAndCost";
import StudentSupportServices from "./StudentSupportServices";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
<div>
<header className="w-100 position-absolute py-3 z-3">
    <div className="container">
    <div className="d-flex align-items-center justify-content-between">
    <div><a className="" href="/">Logo</a></div>
    <div className="d-flex gap-4 align-items-center">
    <nav className="d-lg-flex gap-4 align-items-center d-none">
    <a href="/admissions">Admissions</a><a href="/tuition-and-cost">Tuition &amp; Cost</a>
    <a href="/programs">Programs</a><a href="/student-support-services">Student Support Services</a>
    </nav>
    <div className="d-flex gap-2">
    <div className="btn btn-primary">Request Information</div>
    <div className="btn btn-primary">Contact</div>
    </div>
    </div>
    </div>
    </div>
    </header>
    <Router>
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
    </Switch>

    </div>
    <footer className="py-5"><div className="container"><div className="d-flex flex-column gap-5 align-items-center"><div className="d-flex flex-column align-items-center gap-3"><h1 className="display-1">Start Your Online Journey Today!</h1><div><div className="btn btn-primary">Request Information</div></div></div><nav className="d-flex flex-column flex-md-row gap-3"><a href="/admissions">Admissions</a><a href="/tuition-and-cost">Tuition &amp; Cost</a><a href="/programs">Programs</a><a href="/student-support-services">Student Support Services</a></nav></div></div></footer>
    </Router>
    </div>
  );
}

export default App;
