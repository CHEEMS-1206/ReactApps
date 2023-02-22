import { useEffect, useState } from "react"

function UseEffect() {
    const color = ['black','red','blue','green','brown','violet','purple','orange','yellow','white'];
    const [num,setNum] = useState(0); // useState for changing num on click
    let hStyle = { color: color[num] };
    
    function changeColor(){
        setNum((prevNum) => (prevNum = Math.floor(Math.random() * 10)));
    }
    useEffect(()=>{
        console.log(color[num])
        hStyle = { color: color[num] };
        return 
    },[num])
    /*
    useEffect hook 
    whenever the num changes on clicking the buttons the hstyle value is changed which inturn changes the color of the text.
    */
    return(
        <div>
            <span style={hStyle}>Color Changes</span>
            <button onClick={changeColor}>ChnageColor</button>
        </div>
    )
}
export default UseEffect