import React from "react";
import "../styles/Home.scss";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home">
      <div className="Home-container">
        <div>
          <Link to="/"></Link>
          <p>1</p>
        </div>
        <div>
          <p>2</p>
        </div>
        <div>
          <p>3</p>
        </div>
        <div>
          <p>4</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
