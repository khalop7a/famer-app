import React from "react";
import "./App.css";

import ShrimpSelling from "./Components/Orders/ShrimpSelling";
import ShrimpOrder from "./Components/Orders/ShrimpOrder";
import SellList from "./Components/Market/SellList";

function App() {
  return (
    <div className="App">
      <ShrimpSelling />
      <ShrimpOrder />
      <SellList />
    </div>
  );
}

export default App;
