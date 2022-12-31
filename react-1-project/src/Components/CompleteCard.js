import React from "react";
import './CompleteCard.css'

import TempBlock from "./TempBlock";
import TempType from "./TempType";
import CountryName from "./CountryName";


function CompleteCard(props){
    return (
      <div className="CompleteCard">
        <CountryName countryname={props.COUNTRYNAME} shand={props.SHAND} date={props.DATE}/>
        <TempBlock tempblock={props.TEMP}/>
        <TempType TempType={props.WEATHERTYPE}/>
      </div>
    );
}

export default CompleteCard