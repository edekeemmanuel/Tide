import Home from '../../assets/svg/home.svg';
import {Outlet, Link} from "react-router-dom";

const MyClass = ()=> {
  const tutorial = ()=> {
    console.log("class")
  }
  return( 
      <Link to="/">
        <button 
              onClick={tutorial} 
              className="button" 
              type="button"
              name="myclass" 
              value="myclass" 
              ><img className="" src={Home} alt="home" />Get Started</button>
      </Link>
    )
}
export default MyClass;