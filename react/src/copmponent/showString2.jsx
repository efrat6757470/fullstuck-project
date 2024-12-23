import { useEffect, useState } from "react";
import Show2 from "./btnProps2";

const Show=()=>{
    const [name,setName]=useState("");

    return(
        <>
        <button onClick={()=>{setName("hi")}}> hi</button>
        <button onClick={()=>{setName("by")}}>by</button>
        <Show2 name={name} />
        </>
    )
}
export default Show;