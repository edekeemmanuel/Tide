import Logo from '../../../assets/svg/react.svg';
import Mic from '../../../assets/svg/mic.svg';
import {Outlet, Link} from "react-router-dom";

import Categorie from "../../categories/Categorie.jsx";
//import MyClass from "../../myclass/MyClass.jsx";
import Login from "../../login/Login.jsx";
import SignUp from "../../signup/SignUp.jsx";

const NavBar = ()=> {
  
  return (
    <>
      <nav className="">
        <div className="flex">
            <Link to={"/"}>
              <img className="logo" src={Logo} alt="tide" />
            </Link>
          <div className="flex">
            <Link to="/"><Categorie /></Link>
            <form className="flex" id="search-form" role="search">
              <input
                id="tideSearch"
                aria-label="Search contacts"
                placeholder="What do you want to learn"
                type="search"
                name="tideSearch"/>
              <div id="search-spinner" aria-hidden hidden={true} />
              <div className="sr-only" aria-live="polite"></div>
            </form>
          </div>
          <div >
            <div className="flex">
              <Link to="/login"><Login /></Link>
              <Link to="/register"><SignUp/></Link>
              <Link to="/"><img className="logo" src={Mic} alt="microphone" /></Link>
            </div>
          </div>
        </div>
      </nav>
    </>
    )
}
export default NavBar;