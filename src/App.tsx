import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home-alt";
import Admissions from "./Admissions";
import TuitionAndCost from "./TuitionAndCost";
import StudentSupportServices from "./StudentSupportServices";
import CurrentStudents from "./CurrentStudents";
import SuccessStories from "./SuccessStories";
import ProgramList from "./components/ProgramList";
import Programs from "./Programs-v2";
import RfiModal from "./components/RfiModal";
import StudentStoryFeature from "./components/StudentStoryFeature";

import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Router basename="./">
        {showModal && <RfiModal onClose={() => setShowModal(false)} />}
        <Header showModal={showModal} setShowModal={setShowModal} />
        <div>
          <Home />
        </div>
      </Router>
      <Footer showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
