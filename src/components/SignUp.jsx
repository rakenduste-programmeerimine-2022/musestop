import { NavLink } from "react-router-dom";
import PasswordStrength from "./passwordStrength";


function signUp() {

  /*var postmark = require("postmark");
  var client = new postmark.ServerClient("973c9c5c-6af4-44db-89ab-0f5f23e06a22");
  client.sendEmail({
    "From": "henry_pajuri@outlook.com",
    "To": "henry.pajuri@gmail.com",
    "Subject": "Test",
    "TextBody": "Hello from Postmark!"
  });*/
  
  return (
    <div class="center">
      <h1>SignUp</h1>
      <form id="signUpForm" name="signUpForm" method="post" >
        <div class="txt_field">
          <input type="text" id="email" autoComplete="off" required></input>
          <span></span>
          <label>Email</label>
        </div>
        <div>
          <PasswordStrength autoComplete="off" ></PasswordStrength>
        </div>
        <input className="createAccount"  type="submit" /*style={{ backgroundColor: "gray" }}*/ value="Submit Form"></input>
        <div className="alreadyUser">
          Already a user?<NavLink className="user-nav-link" to="/LogIn">
            {" "}
            LogIn{" "}
          </NavLink>
        </div>
        
        
      </form>
      
    </div>
    
  );
  
}

export default signUp ;
