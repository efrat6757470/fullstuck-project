import { useEffect, useState } from "react";

const Data=()=>{
    const [flag,setFlag]=useState(false);
    //useEffect(()=>{
       // if(flag)return{<h1>"kkkk"</h1>}},[flag]);
    return(
        <>
       { flag&&<h1> jjj</h1>}
        <button onClick={() => setFlag(!flag)}>click me</button>
        </>
    )
}
export default Data;