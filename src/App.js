import './App.css';
import { NavLink } from "react-router-dom";




function App() {
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
              <NavLink className="nav-link" to="/logIn">
                LogIn
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">
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

export default App;
