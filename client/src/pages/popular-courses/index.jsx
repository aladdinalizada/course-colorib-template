import React, { useEffect, useState } from "react";
import "./index.scss";
import author from "../../assets/image/author.jpg";
const PopularCurses = () => {
  const [courses, setCourses] = useState([]);

  const getdata = () => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  };
  useEffect(() => {
    getdata();
  }, []);
  const handleSortByPrice = () => {};
  return (
    <div>
      <div className="popularcourses">
        <div className="container">
          <div className="row-head">
            <hr />
            <h2>Popular Courses</h2>
          </div>
          <button onClick={(e) => handleSortByPrice()}>By Price</button>
          <div className="row-body">
            {courses.map((course) => (
              <div className="card">
                <div className="card-img">
                  <img src={course.img} alt="" />
                </div>
                <div className="card-content">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>
                <div className="card-footer">
                  <div className="left">
                    <img src={author} alt="" />
                    <p>
                      Michael Smith,
                      <span> Author</span>
                    </p>
                  </div>
                  <div className="right">
                    <div className="price">
                      <p>${course.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCurses;
