
import React, { useState } from 'react'
import Home from './Home';
import FormHandling from './FormHandling';
import MultiForm from './MultiForm';
import Counter from "./Counter";
import Toggle from "./Toggle";
import InputExample from "./InputExample";
import ColorChanger from "./ColorChanger";
import LikeButton from "./LikeButton";
const App = () => {
// const count = 0 (Assigning here) instead useState
const[count,setCount] = useState(0)

const handleClick=()=>{
  console.log("clicked")
  // count = count + 1
  setCount(count+1)
}
const ReduceClick=()=>{
  console.log("clicked")
setCount(count-1)
}
const ResetClick=()=>{
  console.log("clicked")
  setCount(0)
}

  return (
    <>
    <div>App</div>
    <h1>{count}</h1>
    <button onClick={handleClick}>Click</button>
    <button onClick={ReduceClick}>DecreaseClick</button>
    <button onClick={ResetClick}>ResetClick</button>
    <Home/>
    <FormHandling/>
    <MultiForm/>
    </>
  )
}

export default App

