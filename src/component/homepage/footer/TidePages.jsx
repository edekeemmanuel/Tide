import {company, resources, quickLinks} from "../../common/data.js"
import {Link} from "react-router-dom";

const TidePages = () => {
  return (
  <div>
    <div className="flex">
      <div className="flex flex-col ">
      <h2 className="px-3 pb-3.5 text-2xl">Company</h2>
      <div className="flex flex-col ">
      {
      company.map( (tideList, index) => (
        <Link className="px-3 py-3 text-xl" key={tideList.length ? tideList.length : index} to="/">{tideList}</Link>
      ))
      }
    </div>
    </div>
    <div className="flex flex-col ">
      <h2 className="px-16 pb-3.5 text-2xl">Resources</h2>
      <div className="flex flex-col ">
      {
      resources.map( (tideList, index) => (
        <Link className="px-16 py-3 text-xl" key={tideList.length ? tideList.length : index} to="/">{tideList}</Link>
      ))
      }
    </div>
    </div>
    <div className="flex flex-col ">
      <h2 className="px-3 pb-3.5 text-2xl text-clip">Quick Links</h2>
      <div className="flex flex-col ">
      {
      quickLinks.map( (tideList, index) => (
        <Link className="px-3 py-3 text-xl text-clip text-nowrap" key={tideList.length ? tideList.length: index} to="/">{tideList}</Link>
      ))
      }
    </div>
    </div>
    
    </div>
    <hr className="h-px my-8 bg-[#6a589d] border-0 dark:bg-[#6a589d]" />
  </div>  

  )
};
export default TidePages; 


