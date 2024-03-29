import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  let course = props.course;

  let likedCourses = props.likedCourses;
  let setLikedcourses = props.setLikedcourses;

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      setLikedcourses((prev) => prev.filter((cid) => cid !== course.id));

      toast.warning("Liked Course removed!");
    } else {
      if (likedCourses.length === 0) {
        setLikedcourses([course.id]);
      } else {
        setLikedcourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully!");
    }
  }
  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80">
      <div className="relative">
        <img src={course.image.url} alt="" />

        <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2  bottom-[-12px] flex justify-center items-center ">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.7rem" />
            ) : (
              <FcLikePlaceholder />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
