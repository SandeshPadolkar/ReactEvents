import React,{useState} from 'react';
import "./Mouse";
import "./style.scss"

const Page = () =>{
    const color="orange";
    const [bg,setBg]=useState(color);
    const [name,setName]=useState("Hey.. Click Me..! 😉😉😉");
    
    const bgColor = () =>{
        // console.log("Clicked");
        let newBg="aqua"; 
        setBg(newBg);
        setName("Double Click Please 👎👎👎");
        
    }; 

    const bgBack = ()=>{
        // let newBg="pink";
        setBg(color);
        setName("Please Click Below Link");
    }

    return(
        <>
        <div style={{backgroundColor: bg}} className="a">
            <h1 className="head">Welcome to React Events</h1><br/><br/><br/>
            <button onClick={bgColor} onDoubleClick={bgBack} className="pbutton">{name}</button><br/><br/><br/>
            <a href="#Mouse">Click Me</a>
        </div>
        </>
    )
}

export default Page;