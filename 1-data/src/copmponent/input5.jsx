import { useEffect, useState } from "react";

const Input5=()=>{
const[input,setInput]=useState("")
useEffect(()=>{alert("welcome")},[])
return(
        <>
        <button onClick={()=>{alert(input)}}></button>
        <input type="text" onChange={(e)=>{setInput(e.target.value)}}/>
        </>
    )
}
export default Input5;