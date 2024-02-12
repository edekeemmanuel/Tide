import Navbar from '../component/dashboard/Navbar.jsx';
import Courses from "../component/dashboard/Course";
import TopCategories from '../component/homepage/TopCategories';
import Footer from '../component/homepage/footer/Footer.jsx';
import {heading} from "../component/common/data.js";

const Dashboard = () => {
  const newHeading = [...heading];
return (
  <>
    <Navbar primary={false} />
    <Courses course={true} heading={newHeading[0]}/>
    <TopCategories topCourse={true}/>
    <Footer primary={true} />
  </>
)
}
export default Dashboard;
