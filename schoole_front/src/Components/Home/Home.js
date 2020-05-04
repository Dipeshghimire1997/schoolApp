import React from "react";
import { connect } from "react-redux";
let Home = (props) => {
  return (
    <div className="homePage col">
      <div>
        <img className="img" src={require("../../Assets/Images/c1.jpg")} />
      </div>
      <div className="home-title"> Small Photo Gallary</div>
      <div className="basic-grid">
        <div>
          <img className="img" src={require("../../Assets/Images/c7.jpg")} />
        </div>
        <div>
          <img className="img" src={require("../../Assets/Images/c3.jpg")} />
        </div>
        <div>
          <img className="img" src={require("../../Assets/Images/c5.jpg")} />
        </div>

        <div>
          <img className="img" src={require("../../Assets/Images/c6.jpg")} />
        </div>
      </div>
      <div>
        <p className="home-title">Notice</p>
        <div className="cards">
          <div className="card">
            <div className="card-title">The title</div>
            <div className="card-body">
              the information if the cards to to dispalyed
            </div>
          </div>
          <div className="card">
            <div className="card-title">The title</div>
            <div className="card-body">
              the information if the cards to to dispalyed
            </div>
          </div>
          <div className="card">
            <div className="card-title">The title</div>
            <div className="card-body">
              the information if the cards to to dispalyed
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="home-title">Why us ?</p>
      </div>
    </div>
  );
};

export default Home;
