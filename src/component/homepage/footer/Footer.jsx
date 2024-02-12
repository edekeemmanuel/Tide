import Logo from '../../../assets/images/tide-logo-03.png';
import {company, resources, quickLinks} from "../../common/data.js"
import {Link} from "react-router-dom";
import TidePages from "./TidePages"

const Footer = () => {
  return (
    <footer className="bg-primaryColor text-neutral-50 overflow-hidden">
      <div className="flex wrapper pt-[200px]">
        <div>
          <TidePages />
          <div>
            <p>2024 TIDE rights reserved</p>
          </div>
        </div>
        <div className="relative left-[100px] bottom-[40px]">
          <img className="w-[600px] h-[400px]" src={Logo} />
        </div>
      </div>
    </footer>
  )
}
export default Footer;