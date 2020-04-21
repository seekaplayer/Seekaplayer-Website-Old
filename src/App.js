import React, { useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/templates/header/Header";
import Footer from "./components/templates/footer/Footer";
import PageRouting from "./components/pages/PageRouting";
import "./App.css";

import { loadReCaptcha } from "react-recaptcha-google";

const App = () => {
  useEffect(() => {
    loadReCaptcha();
  }, []);

  return (
    <div className="reactBody">
      <Router>
        <Header />
        <PageRouting />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
