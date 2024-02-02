import Logo from '../../../assets/svg/react.svg';
import {Outlet, Link} from "react-router-dom";
import Login from "../../login/Login.jsx"
import SignUp from "../../signup/SignUp.jsx"
const NavBar = ()=> {
  
  return (
    <>
      <nav className="">
        <div className="flex">
            <Link to={"/"}>
              <img className"logo" src={Logo} />
            </Link>
          <div>
            <a>Categories</a>
            <form id="search-form" role="search">
              <input
                id="tideSearch"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="tideSearch"/>
              <div id="search-spinner" aria-hidden hidden={true} />
              <div className="sr-only" aria-live="polite"></div>
            </form>
            <form className="flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          <div>
            <a href="#">My Classes</a>
            <div>
              <Login />
              <SignUp />
              
            </div>
          </div>
        </div>
      </nav>
    </>
    )
}
export default NavBar;