import React from "react";
import ShrimpPriceChart from "./components/ShrimpPriceChart";
import Map from "./components/Map";
import Chat from "./components/Chat";
import News from "./components/News";
import Salinity from "./components/Salinity";
import WaterSource from "./components/WaterSource";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App bg-light">
      <div className="row justify-content-between py-2">
        <div className="bg-white p-2" style={{ width: "34%" }}>
          <Map />
        </div>
        <div className="bg-white p-2" style={{ width: "40%" }}>
          <div className="row">
            <div className="col-sm-6">
              <Salinity />
            </div>
            <div className="col-sm-6">
              <WaterSource />
            </div>
          </div>
          <ShrimpPriceChart />
        </div>
        <div className="bg-white p-2" style={{ width: "25%" }}>
          <News />
        </div>
      </div>
      <div className="row justify-content-between pb-2">
        <div className="bg-white p-2" style={{ width: "40%" }}>
          <Weather />
        </div>
        <div className="bg-white p-2" style={{ width: "29%" }}>
          <ShrimpPriceChart />
        </div>
        <div className="bg-white p-2" style={{ width: "30%" }}>
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default App;
