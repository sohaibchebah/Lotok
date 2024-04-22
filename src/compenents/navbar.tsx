import "bootstrap/dist/css/bootstrap.css";
import Logo from "../../public/images/logo.png";
import "../compenents/navbar.css";
const Navbar = () => {
  return (
    <nav className="navibar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Brands</a>
          </li>
          <li>
            <a href="#">Vehicles</a>
          </li>
          <li >
            <a href="#">About</a>
          </li>
          <button>log in</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
