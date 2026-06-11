import { Link } from "react-router-dom";
function Header(){
    return(

         <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="nav-brand">
          <span className="brand-icon">⬡</span>
          <span className="brand-text">
            AI<strong>Lead</strong>
          </span>
        </Link>

        <ul className="nav-links">

          <li>
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/addLead" className="nav-link">
              Add Lead
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  
    );
}
export default Header;
