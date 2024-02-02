import {Outlet} from "react-router-dom";
import NavBar from "./navbar/NavBar.jsx";
const Home = () => {
  return (
      <>
        <NavBar />
        <Outlet />
      </>
    )
}
export default Home;