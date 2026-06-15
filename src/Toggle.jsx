import React, { useState } from "react";

const Toggle = () => {

 const [show,setShow] = useState(false);

 return (
   <div>

    <h2>Toggle Example</h2>

    {
      show && <p>Hello React</p>
    }

    <button onClick={()=>setShow(!show)}>
      Toggle
    </button>

   </div>
 )

}

export default Toggle;