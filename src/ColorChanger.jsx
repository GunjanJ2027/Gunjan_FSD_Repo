import React,{useState} from "react";

const ColorChanger=()=>{

 const [color,setColor]=useState("white");

 return(
  <div>

   <h2>Color Example</h2>

   <div 
    style={{
     backgroundColor:color,
     width:"100px",
     height:"100px"
    }}
   >
   </div>


   <button onClick={()=>setColor("red")}>
    Red
   </button>

   <button onClick={()=>setColor("blue")}>
    Blue
   </button>


  </div>
 )

}

export default ColorChanger;