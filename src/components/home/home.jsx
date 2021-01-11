import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Tailor App Dashboard <br></br>
      <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Home;
