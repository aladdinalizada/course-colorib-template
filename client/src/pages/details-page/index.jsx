import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import "./index.scss";
const DetailsPage = () => {
  let { id } = useParams();

  let fetchId = id.indexOf(1);
  const [detailsData, setdetailsData] = useState([]);
  const getdata = () => {
    fetch(`http://localhost:3000/${fetchId}`)
      .then((res) => res.json())
      .then((data) => {
        setdetailsData(data);
      });
  };
  useEffect(() => {
    getdata();
  }, []);
  console.log(detailsData);

  return (
    <div>
      <Helmet>
        <title>Details Page</title>
      </Helmet>
      <div className="detailsPage">
        <div className="container">
          <div className="left">
            <img src={detailsData.img} alt="" />
          </div>
          <div className="right">
            <h1>{detailsData.title}</h1>
            <p>{detailsData.description}</p>
            <p>Price : {detailsData.price}</p>
            <button>
              <Link to="/">Go back</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
