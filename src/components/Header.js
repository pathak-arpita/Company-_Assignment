import { Link } from "react-router-dom";
import NavLogo from "../assets/img/icon - Copy.jpg";
import "../../index.css"

const Title = () => (
    <Link to="/" className="nav-ul">
       <img
        src={NavLogo}
        className="logo"
        alt="logo"
      /> 

    </Link>
  );
  
  const Header = () => {
    return (
      <div className="nav-header">
        <Title />
  
        <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
      </div>
    );
  };
  
  export default Header;