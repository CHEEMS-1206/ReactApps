import React, { useState } from "react";

function Memo(){
    let [num,setNum] = useState(0);
    let i=num;

    function factorial(num){
        console.log("called",i++)
        if(num <= 1){
            return 1;
        }
        return num * factorial(num - 1); 
    }

    function  setOurNum(event){
        num = event.target.value
        if (num === 0 || num === '0') setNum(0);
        else setNum(num = factorial(num));
    }
    
    return (
    <div>
        <input type="number" defaultValue="0" onChange={setOurNum}></input>
        <span>{num}</span>
    </div>
)};

/*
use memo modal 

const functionValue = useMemo(()=> {
    return slowFunction(arg)
},[sensitivityList])

*/

export default Memo;