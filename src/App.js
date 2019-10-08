import React from "react";
import "./App.css";

import Header from "./Components/HomePage/Header";
import Footer from "./Components/HomePage/Footer";
import RouterURL from "./Components/Router/RouterURL"
import {BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
        <div>
            <Header/>
            <div className="App">
              <RouterURL />
            </div>
            <Footer />
        </div>
    </Router>
  );
}


export default App;