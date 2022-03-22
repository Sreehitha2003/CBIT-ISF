import React from "react";
import "./cards.css";

const Cards = () => {
  return (
    <>
      <div class="row">
        <div class="col-sm-12 col-lg-3 col-md-6">
          <div class="card">
            <div class="card-body">
              <p class="card-text">
                Improving standard of Engineering Education
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-3 col-md-6">
          <div class="card">
            <div class="card-body">
              <p class="card-text">
                Counseling the students in the emerging new opportunities
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-3 col-md-6">
          <div class="card">
            <div class="card-body">
              <p class="card-text">
                Encouraging and motivating the outside Class room studies /Work
                shops/projects/Seminars
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-3 col-md-6">
          <div class="card">
            <div class="card-body">
              <p class="card-text">
                Increasing the student base and Corporate membership of IETE
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;