import Hero from '../component/homepage/Hero';
import TopCategories from '../component/homepage/TopCategories';
import Courses from '../component/dashboard/Course.jsx';
import {heading} from "../component/common/data.js";

const Home = () => {
  const newHeading = [...heading];
  return (
    <>
      <Hero />
      <TopCategories />
      <Courses heading={newHeading[1]}/>
    </>
  );
};
export default Home;
