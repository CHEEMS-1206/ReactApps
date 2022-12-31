import React from "react";
import './App.css'
import CompleteCard from "./Components/CompleteCard";


function App(props) {
  const urreyBhai = [
    {
      id: 1,
      date: new Date(2021, 5, 23),
      countryname: "India",
      weatherType: "Cloudy",
      temperaturs: 36,
      shorthand: "In",
    },
    {
      id: 2,
      date: new Date(2021, 5, 23),
      countryname: "United States Of America",
      weatherType: "Sunny",
      temperaturs: 26,
      shorthand: "USA",
    },
    {
      id: 3,
      date: new Date(2021, 5, 23),
      countryname: "England",
      weatherType: "Snowie",
      temperaturs: 12,
      shorthand: "En",
    },
    {
      id: 4,
      date: new Date(2021, 5, 23),
      countryname: "Australia",
      weatherType: "Hot",
      temperaturs: 42,
      shorthand: "Au",
    },
  ];
  return (
    <div className="App">
      <CompleteCard
        DATE={urreyBhai[0].date}
        COUNTRYNAME={urreyBhai[0].countryname}
        WEATHERTYPE={urreyBhai[0].weatherType}
        TEMP={urreyBhai[0].temperaturs}
        SHAND={urreyBhai[0].shorthand}
      />
      <CompleteCard
        DATE={urreyBhai[1].date}
        COUNTRYNAME={urreyBhai[1].countryname}
        WEATHERTYPE={urreyBhai[1].weatherType}
        TEMP={urreyBhai[1].temperaturs}
        SHAND={urreyBhai[1].shorthand}
      />
      <CompleteCard
        DATE={urreyBhai[2].date}
        COUNTRYNAME={urreyBhai[2].countryname}
        WEATHERTYPE={urreyBhai[2].weatherType}
        TEMP={urreyBhai[2].temperaturs}
        SHAND={urreyBhai[2].shorthand}
      />
      <CompleteCard
        DATE={urreyBhai[3].date}
        COUNTRYNAME={urreyBhai[3].countryname}
        WEATHERTYPE={urreyBhai[3].weatherType}
        TEMP={urreyBhai[3].temperaturs}
        SHAND={urreyBhai[3].shorthand}
      />
      
    </div>
  );
}

export default App;
