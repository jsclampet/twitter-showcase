import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-section">
        <div className="content-group">
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
          <br />
          <h4>Temporibus, distinctio reprehenderit. Omnis!</h4>
          <br />
          <h4>
            culpa ut quod vitae hic voluptates, ea commodi maxime nobis
            quibusdam ad!
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
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
          <br />
          <h4>Temporibus, distinctio reprehenderit. Omnis!</h4>
          <br />
          <h4>
            culpa ut quod vitae hic voluptates, ea commodi maxime nobis
            quibusdam ad!
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
