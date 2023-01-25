import React, { useEffect, useState } from "react";
import "./index.scss";
import author from "../../assets/image/author.jpg";
import { Link } from "react-router-dom";
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

  // toolge
  const [toogle, setToogle] = useState(false);
  const handleSortByPrice = () => {
    const azalan = courses.sort((a, b) => a.price - b.price);
    const artan = courses.sort((a, b) => b.price - a.price);
    console.log(coursrsSor);
    if (!toogle) {
      setCourses(artan);
    } else {
      setCourses(azalan);
    }
  };

  const handleDeatilsPage = (e) => {
    let { id } = e.target;
    window.location.href = `/:${id}`;
  };

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
              <div className="card" key={course.id}>
                <div className="card-img">
                  <img src={course.img} alt="" />
                </div>
                <div className="card-content">
                  <Link onClick={(e) => handleDeatilsPage(e)}>
                    <h3 id={course.id}>{course.title}</h3>
                  </Link>
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
