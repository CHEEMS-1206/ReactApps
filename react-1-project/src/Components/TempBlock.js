import React from "react";
import "./TempBlock.css";

function TempBlock(props) {
  return <div className="TempBlock">{props.tempblock}°C</div>;
}

export default TempBlock;
