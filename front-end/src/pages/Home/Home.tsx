import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-section">
        <div className="content-group content-text">
          <h4></h4>
          <br />
          <h2 className="app-title">
            Welcome to <span>Twitter Showcase!</span>
          </h2>
          <br />
          <h4>
            <span>Search</span> 🔍 View the latest tweets from your favorite
            twitter users
          </h4>
          <br />
          <br />
          <h4>
            <span>Showcase</span> ⭐️ Get recent tweets from the most popular
            tech and productivity experts
          </h4>
        </div>
        <div className="content-group content-img">
          <div className="square-img top-img"></div>
        </div>
      </div>
      <div className="content-section">
        <div className="content-group content-img">
          <div className="square-img bottom-img"></div>
        </div>
        <div className="content-group content-text">
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
