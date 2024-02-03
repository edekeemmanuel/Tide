import TopCategories from "../sections/TopCat.jsx"
import RecommendedCourses from "../sections/RecCourse.jsx";
import MyClass from "../../myclass/MyClass.jsx";
const Main = () => {
  return (
      <main>
        <TopCategories />
        <RecommendedCourses />
        <div>
          <div>
            <h1>Gain knowledge, develop and achieve success.</h1>
            <MyClass />
          </div>
        </div>
      </main>
    )
}
export default Main;