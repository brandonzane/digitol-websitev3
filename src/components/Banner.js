import React from "react";
import Airbaloon from "../img/airbaloons-1.jpeg";
import Skate from "../img/skate.gif";
import "../App.scss";

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="banner-text text-left">
              <h1 className="title-font">
                Simplicity. <span className="text-yellow">Creativity.</span>
                <span className="text-gray"> Technology.</span>{" "}
                <span className="text-customer">People</span>
              </h1>
            </div>
          </div>
          <div className="banner-image-mobile">
            <div className="col-xl-7 col-lg-6 d-lg-block">
              <div className="banner-area">
                <img className="banner-image" src={Airbaloon} alt="images" />
              </div>
            </div>
          </div>
          <div className="banner-image-desktop col-xl-7 col-lg-6 d-lg-block">
            <div className="banner-area">
              <img className="banner-image" src={Skate} alt="images" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
