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
    <div className="App bg-info p-2">
      <div className="row justify-content-between pb-2">
        <div className="col-sm-4 bg-light">
          <Map />
        </div>
        <div className="col-sm-4 bg-white">
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
        <div className="col-sm-4 bg-light">
          <News />
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-sm-4 bg-light">
          <Weather />
        </div>
        <div className="col-sm-4 bg-light">
          <ShrimpPriceChart />
        </div>
        <div className="col-sm-4 bg-light">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default App;
