import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-section">
        <div className="content-group">
          <h4></h4>
          <br />
          <h2 className="app-title">
            Welcome to <span>Twitter Showcase!</span>
          </h2>
          <br />
          <h4>
            Click on the Search 🔍 page to view the latest tweets from your
            favorite twitter users
          </h4>
          <br />
          <h4>
            Navigate to the Showcase ⭐️ page for recent tweets from some of the
            most popular and influential public figures
          </h4>
        </div>
        <div className="content-group">
          <div className="square-img top-img"></div>
        </div>
      </div>
      <div className="content-section">
        <div className="content-group">
          <div className="square-img bottom-img"></div>
        </div>
        <div className="content-group">
          <h4>For the social media minimalist</h4>
          <br />
          <h4>Enjoy the bloat and ad-free experience.</h4>
          <br />
          <h4>No twitter account needed!</h4>
          <br />
          <h4>Keep up with the latest news and trends!</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
