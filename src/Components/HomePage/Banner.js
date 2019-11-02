import React, { Component } from "react";
class Banner extends Component {
  render() {
    return (
      <div className="banner">
        {/*banner*/}

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="/picture-stfarm/banner1.png" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/picture-stfarm/banner2.png" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/picture-stfarm/banner3.png" alt="First slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>

        {/*end banner*/}
      </div>
    );
  }
}
export default Banner;
