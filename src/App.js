import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FamilyEarnings from "./components/FamilyEarnings";
import CurrentStep from "./components/CurrentStep";
import Expenses from "./components/Expenses";
import Footer from "./components/Footer";
import PieChart from "./components/PieChart";

const App = () => {
  return (
    <Router>
      <CurrentStep />
      <Route exact path="/" component={FamilyEarnings} />
      <Route path="/wydatki" component={Expenses} />
      <Route path="/wykres" component={PieChart} />
      <Footer />
    </Router>
  );
};

export default App;
