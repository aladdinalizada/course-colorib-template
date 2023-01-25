import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const SearchRegister = () => {
  return (
    <div>
      <div className="searchRegister">
        <div className="container">
          <div className="left">
            <div className="context">
              <h3>
                Register now and get a discount <span>50%</span> discount until
                1 January
              </h3>
              <p>
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante
                nisl fermentum nulla, vitae tempo.
              </p>
              <button>
                <Link>REGISTER NOW</Link>
              </button>
            </div>
          </div>
          <div className="right">
            <div className="context">
              <div className="search">
                <h4>Search for your course</h4>
                <input type="text" placeholder="Course Name" />
                <input type="text" placeholder="Category" />
                <input type="text" placeholder="Degree" />
                <button>
                  <Link>SEARCH COURSE</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchRegister;
