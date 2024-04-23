import Logo from "../../public/images/logo.png";
import "../compenents/navbar.css";
import Loto from "../../public/images/rightloto.png"
import Vector from "../../public/images/vector.jpg"
const Navbar = () => {
  return (
    <>
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
            <li>
              <a href="#">About</a>
            </li>
            <button>log in</button>
          </ul>
        </div>
      </nav>
      <div className="images">
        <div className="rouge">
          <img src={Vector} alt=""  className="vector"/>
        </div>
        <div className="loto">
          <img src={Loto} alt="loto" className="loto"/>
        </div>
      </div>
      <div className="texts container">
        <h1 className="rent">
          rent 
          your <br />
          <span>favourite</span> <br />
          vehicle
        </h1>
        <div className="under">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusamus dolores ducimus omnis sit nobis totam pariatur optio quia voluptate.
        </div>
      </div>
      <form action="" className="reserver">
        
      </form>
    </>
  );
};

export default Navbar;
