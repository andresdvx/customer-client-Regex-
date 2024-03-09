import { Link } from "react-router-dom";
import "./NavBar.css"
function NavBar() {
  return (
    <nav className="nav">
      <div className="section-title">
        <h2>Customers</h2>
      </div>
      <div className="section-links">
        <ul>
          <li>
            <Link to={"/customers"}>Customers</Link>
          </li>
          <li>
            <Link to={"/create"}>New Customer</Link>
          </li>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
