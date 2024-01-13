import { React, useState } from "react";
import Card from "../components/Card";

function Cards(props) {
  let courses = props.courses;

  const [likedCourses, setLikedcourses] = useState([]);

  let category = props.category;

  function getCourses() {
    if (category === "All") {
      let allCourses = [];

      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => allCourses.push(courseData));
      });
      return allCourses;
    } else {
      return courses[category];
    }
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedcourses={setLikedcourses}
        />
      ))}
    </div>
  );
}

export default Cards;
