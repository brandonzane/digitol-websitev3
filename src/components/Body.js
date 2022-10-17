import React from "react";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import "../App.scss";

const Body = () => {
  return (
    <>
      <section className="about-us-area text-white">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="about-us-text-area mb-5 mt-5">
                <h2 className="about-us-text title-font-2">
                  We specialize in telling brand stories
                  <br />
                  along the entire customer journey.
                </h2>
                <p className="mt-4 mb-4 title-font-2">
                  With people being front and centre of our organization, we
                  create campaigns that focus on customers and accurately
                  communicate the identity of our supported brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />

      <section className="lead">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="lead-title text-white mb-5 mt-4">
                <h1 className="title-font">Let's work together</h1>
                <p className="mt-4 mb-4 title-font-2">
                  We've got the solutions to help you scale your business
                </p>
                <Link to="/contact">
                  <button className="btn text-white">Contact</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
