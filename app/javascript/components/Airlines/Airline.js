import React from "react";
import { Link } from "react-router-dom";

export default function Airline(props) {
  return (
    <div className="col-md-3">
      <div className=" card">
        <img
          style={{ width: "250px", height: "250px" }}
          className="card-img-top"
          src={props.attributes.logo_url}
          alt={props.attributes.name}
        />
        <div className="card-body">
          <h5 className="card-title">{props.attributes.name}</h5>
          <p className="card-text">Score: {props.attributes.avg_score}</p>
          <Link
            to={`/airlines/${props.attributes.slug}`}
            className="btn btn-outline-secondary"
          >
            View Airline
          </Link>
        </div>
      </div>
    </div>
  );
}