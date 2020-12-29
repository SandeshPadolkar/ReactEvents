import React, {useState} from 'react'
import "./style.scss"

const Mouse = () => {
    const color ="chocolate";
    const [bg,setBg] = useState(color);
    const [name,setName]=useState("Welcome to 2021 🥰👍");
    const bgChange=()=> {
        let newBg="yellow";
        setBg(newBg);
        setName("Have a wonderful year ahead..! 🥰🥰🥰");

    };
    const bgBack = () =>
    {
        setBg(color);
        setName("A very... Happy New Year 😉🥰👍");
    };
    return (
        <div style={{backgroundColor:bg}} className="mdiv">
        <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>
            
        </div>
    )
}

export default Mouse