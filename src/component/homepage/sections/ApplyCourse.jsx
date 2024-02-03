import {Outlet, Link} from "react-router-dom";

const ApplyCourse = ()=> {
  const applyCourse = ()=>{
    console.log("applyCourse")
  }
  return (
      <Link to="/">
        <button 
                  onClick={applyCourse} 
                  className="button" 
                  type="button" 
                  name="applyCourse"
                  value="applyCourse">Apply</button>
      </Link>
    )
}
export default ApplyCourse;