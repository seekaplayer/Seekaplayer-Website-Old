import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/templates/header/Header";
import Footer from "./components/templates/footer/Footer";
import PageRouting from "./components/pages/PageRouting";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <PageRouting />
      </Router>
      <Footer />
    </>
  );
};

export default App;
