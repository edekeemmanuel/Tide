import Image from '../../../assets/images/education-4796952_1920 1.png';
import {company, resources, quickLinks} from "../../data/data.js"
import {Link} from "react-router-dom";
import Tides from "./tidesContainer.jsx";
import {useGlobalContext} from "../../../GlobalContext.jsx";

const Footer = () => {
  const {name, tides} = useGlobalContext();
  return (
      <footer>
      <div className="flex">
      <div>
        <div className="flex">
          <Tides />
          <div>
            <h2>Company</h2>
            <div className="">
            {
            company.map(name => (
              <div >
                <Link to="/"><h3>{name}</h3>
                </Link>
              </div>
              )
            )
            }
            </div>
          </div>
          <div>
            <h2>Resources</h2>
            <div className="">
            {
            resources.map(name => (
              <div>
                <Link to="/">
                  <h3>{name}</h3>
                </Link>
              </div>
              )
            )
            }
            </div>
          </div>
          <div>
            <h2>Quick links</h2>
            <div className="">
            {
            quickLinks.map(name => (
              <div>
                <Link to="/">
                  <h3>{name}</h3>
                </Link>
              </div>
              )
            )
            }
            </div>
          </div>
        </div>
        <div>
          <p>2024 TIDE rights reserved</p>
        </div>
      </div>
      <div>
        <img src={Image} />
      </div>
      </div>
      </footer>
    )
}
export default Footer;