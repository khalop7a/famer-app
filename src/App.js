import React from "react";
import "./App.css";
import RouterURL from "./Components/Router/RouterURL"
import Header from "./Components/HomePage/Header"
import Footer from "./Components/HomePage/Footer"
import {Router} from "react-router-dom"

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