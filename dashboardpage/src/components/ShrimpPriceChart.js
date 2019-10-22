import React, { Component } from "react";
import Chart from "react-google-charts";
class ShrimpPriceChart extends Component {
  constructor(props) {
    super(props);
  }
  //Funtions

  render() {
    return (
      <div style={{ display: "flex", maxWidth: 900 }}>
        <Chart
          width={"100%"}
          height={"300"}
          chartType="Line"
          loader={<div>Loading Chart</div>}
          data={[
            [{ type: "date", label: "Tháng" }, "Giá tôm trung bình"],
            [new Date(2019, 0), 5.7],
            [new Date(2019, 1), 8.7],
            [new Date(2019, 2), 12],
            [new Date(2019, 3), 15.3],
            [new Date(2019, 4), 18.6],
            [new Date(2019, 5), 20.9],
            [new Date(2019, 6), 19.8],
            [new Date(2019, 7), 16.6],
            [new Date(2019, 8), 13.3],
            [new Date(2019, 9), 9.9],
            [new Date(2019, 10), 6.6],
            [new Date(2019, 11), 4.5]
          ]}
          options={{
            chart: {
              title: "Giá tôm trung bình các tháng"
            },
            // width: 300,
            height: 300,
            series: {
              // Gives each series an axis name that matches the Y-axis below.
              0: { axis: "Giá" }
            },
            axes: {
              // Adds labels to each axis; they don't have to match the axis names.
              y: {
                Temps: { label: "Temps (Celsius)" }
              }
            }
          }}
          rootProps={{ "data-testid": "4" }}
        />
      </div>
    );
  }
}

export default ShrimpPriceChart;
