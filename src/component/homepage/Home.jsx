import {Outlet} from "react-router-dom";
import NavBar from "./navbar/NavBar.jsx";
import Header from "./header/Header.jsx";
import Main from "./main/Main.jsx";
import Footer from "./footer/Footer.jsx";

const Home = () => {
  return (
      <>
        <NavBar />
        <Header />
        <Main />
        <Footer />
        <Outlet />
      </>
    )
}
export default Home;