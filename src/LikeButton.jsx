import React,{useState} from "react";

const LikeButton=()=>{

 const [like,setLike]=useState(0);


 return(
  <div>

   <h2>Like Example</h2>

   <h3>Likes : {like}</h3>

   <button onClick={()=>setLike(like+1)}>
    Like 👍
   </button>


  </div>
 )

}

export default LikeButton;