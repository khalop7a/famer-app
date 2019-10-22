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
          <div className="bg-white" style={{width: "33%"}}>
            <Map />
          </div>
          <div className="bg-white" style={{width: "33%"}}>
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
          <div className="bg-white" style={{width: "33%"}}>
            <News />
          </div>
        </div>
        <div className="row justify-content-between pb-2">
          <div className="bg-white" style={{width: "33%"}}>
            <Weather />
          </div>
          <div className="bg-white" style={{width: "33%"}}>
            <ShrimpPriceChart />
          </div>
          <div className="bg-white" style={{width: "33%"}}>
            <Chat />
          </div>
        </div>
      </div>
  );
}

export default App;
