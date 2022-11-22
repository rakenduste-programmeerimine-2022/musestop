import { NavLink } from "react-router-dom";



function logIn() {

  return (
  <div class="center">
    <h1>Login</h1>
    <form method="post">
      <div class="txt_field">
        <input type="text" id="email" required></input>
        <span></span>
        <label>Email</label>
      </div>
      <div class="txt_field">
        <input type="password" id="password" required></input>
        <span></span>
        <label>Password</label>
      </div>
      
      <div class="pass">Forgot Password?</div>
      <input type="submit" value="Login"></input>
      <div class="signup_link">
        Not a member?<NavLink className="nav-link" to="/SignUp">
                    Sign Up
                  </NavLink>
      </div>
    </form>
  </div>);
}

export default logIn;
