import Image1 from '../../../assets/images/education-4796952_1920 1.png';
import MyClass from "../../myclass/MyClass.jsx";

const Header = () => {
  return(
      <header>
      <div className="flex">
        <div className="">
          <h1>Get the necessary abilities right now.</h1>
          <p>Our top-notch classes prepare you for high-paying jobs</p>
          <MyClass />
        </div>
        <div>
          <img src={Image1} />
        </div>
      </div>
      </header>
    )
}
export default Header;