//import {company, resources, quickLinks} from "../../data/data.js";
import {Link} from "react-router-dom";

const tidesContainer = () => {
  //const {company, resources, quickLinks} = tides;
  return (
      <div>
            <h2>{name}</h2>
            <div className="">
            {
            tides.map(names => (
              <div >
                <Link to="/"><h3>{names}</h3>
                </Link>
              </div>
              )
            )
            }
            </div>
      </div>
    )
}
export default tidesContainer;