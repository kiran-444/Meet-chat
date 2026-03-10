import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>MeetChat</h2>
        </div>
        <div className="navList">
          <p>Join as Guest</p>
          <p>Register</p>
          <div role="button">
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">

        <div>
          <h2>Connect with your loved ones</h2>
        <p>Cover a distance by MeetChat</p>
       <div role="button">
         <Link to={"/auth"} >Get started</Link>
       </div>
        </div>

       <div>
       <img src="/mobile.png" alt="" />
       </div>
       
      </div>
    </div>
  );
}
