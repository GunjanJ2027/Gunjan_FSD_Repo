import React, {useState} from "react";

const InputExample =()=>{

 const [name,setName]=useState("");

 return(
  <div>

   <h2>Input Example</h2>

   <input
    onChange={(e)=>setName(e.target.value)}
    placeholder="Enter name"
   />

   <h3>Hello {name}</h3>

  </div>
 )

}

export default InputExample;