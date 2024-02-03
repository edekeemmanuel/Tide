import {recCourses} from "../../data/data.js";
import ApplyCourse from "./ApplyCourse.jsx"
const RecommendedCourses = () => {
  
  return (
      <section>
        <div>
          <h1>Recommended Courses</h1>
          <div className="flex">
            {
            recCourses.map(course => (
              <div key={course.id}>
                <img src={course.source}/>
                <h3>{course.text}</h3>
                <div>{course.rate}</div>
                <ApplyCourse />
              </div>
              )
            )
            }
          </div>
        </div>
      </section>
    )
}
export default RecommendedCourses;