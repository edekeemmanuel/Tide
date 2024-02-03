import {topCourses} from "../../data/data.js"
const TopCategories = () => {
  return (
      <section>
        <div>
          <h1>Top Categories</h1>
          <div className="flex">
            {
            topCourses.map(course => (
              <div key={course.id}>
                <img src={course.source}/>
                <h3>{course.text}</h3>
              </div>
              )
            )
            }
          </div>
        </div>
      </section>
    )
}
export default TopCategories;