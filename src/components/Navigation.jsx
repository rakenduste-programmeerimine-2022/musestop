import { NavLink } from "react-router-dom";

function Navigation() {
    return (
      <div className="navigation">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              React Multi-Page Website
            </NavLink>
            <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/LogIn">
                    LogIn
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/SignUp">
                   SignUp
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Users">
                    users
                  </NavLink>
                </li>
                <li className="nav-item">
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Navigation;