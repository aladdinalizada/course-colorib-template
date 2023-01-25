import React from "react";
import "./index.scss";
import globe from "../../assets/image/earth-globe.svg";
import exam from "../../assets/image/exam.svg";
import books from "../../assets/image/books.svg";
import professor from "../../assets/image/professor.svg";
import blackboard from "../../assets/image/blackboard.svg";
import mortarboard from "../../assets/image/mortarboard.svg";
const Services = () => {
  return (
    <div>
      <div className="services">
        <div className="container">
          <div className="row-head">
            <hr />
            <h2>Our Services</h2>
          </div>
          <div className="row-body">
            <div className="card">
              <div className="card-img">
                <img src={globe} alt="" />
              </div>
              <div className="card-desc">
                <h3>Online Courses</h3>
                <p>
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={exam} alt="" />
              </div>
              <div className="card-desc">
                <h3>Indoor Courses</h3>
                <p>
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={books} alt="" />
              </div>
              <div className="card-desc">
                <h3>Amazing Library</h3>
                <p>
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={professor} alt="" />
              </div>
              <div className="card-desc">
                <h3>Amazing Library</h3>
                <p>
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={blackboard} alt="" />
              </div>
              <div className="card-desc">
                <h3>Exceptional Professors</h3>
                <p>
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={mortarboard} alt="" />
              </div>
              <div className="card-desc">
                <h3>Graduate Diploma</h3>
                <p>
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
