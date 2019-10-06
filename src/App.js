import React from "react";
import "./App.css";

import ShrimpSelling from "./Components/Orders/ShrimpSelling";
import ShrimpOrder from "./Components/Orders/ShrimpOrder";

function App() {
  return (
    <div className="App">
      <ShrimpSelling />
      <ShrimpOrder />
    </div>
  );
}

export default App;
