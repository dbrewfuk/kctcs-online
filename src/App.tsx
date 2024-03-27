import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home-alt";
import Programs from "./Programs-v2";
import Admissions from "./Admissions";
import TuitionAndCost from "./TuitionAndCost";
import StudentSupportServices from "./StudentSupportServices";
import CurrentStudents from "./CurrentStudents";

import "./App.css";

function App() {
  return (
    <div>
      <Router basename="./">
        <Header />
        <div>
          <AnimatePresence mode="wait">
            <Switch>
              <Route exact path="/">
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Home />
                </motion.div>
              </Route>
              <Route exact path="/programs">
                <motion.div
                  key="programs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Programs />
                </motion.div>
              </Route>
              <Route path="/admissions">
                <motion.div
                  key="admissions"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Admissions />
                </motion.div>
              </Route>
              <Route path="/tuition-and-cost">
                <motion.div
                  key="tuition"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <TuitionAndCost />
                </motion.div>
              </Route>
              <Route path="/student-support-services">
                <motion.div
                  key="support"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <StudentSupportServices />
                </motion.div>
              </Route>
              <Route path="/current-students">
                <motion.div
                  key="students"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <CurrentStudents />
                </motion.div>
              </Route>
            </Switch>
          </AnimatePresence>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
