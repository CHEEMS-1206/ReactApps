import React from "react";
import "./CountryName.css";

function CountryName(props) {
  return (
    <div className="CountryName">
      {/* {props.temperature} */}
      <h4 className="Name">{props.countryname},  {props.shand}</h4>
      <div className="date">
        <span>{props.date.toLocaleString("en-US", { weekday: "long" })} ,</span>
        <span>{props.date.toLocaleString("en-US", { day: "numeric" })}</span>
        <span>{props.date.toLocaleString("en-US", { month: "long" })}</span>
        <span>{props.date.toLocaleString("en-US", { year: "numeric" })}</span>
      </div>
    </div>
  );
}

export default CountryName;
