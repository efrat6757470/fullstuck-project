import { useState } from "react"

const Birthday6=(props)=>{
    const[age,setAge]=useState(5)
    
    return(
        <>
        
        {props.age>18?
        <>{alert("המשתמש מעל גיל 18") } {<h2 style={{color:"blue"}}>Happy Birthday! {props.name} {  props.age} years old! </h2>}</>
       :        <h2>Happy Birthday! {props.name} {  props.age} years old! </h2>
    }
        </>
    )
}
export default Birthday6;