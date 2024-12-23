import { useRef, useState } from "react"

const SignUp=()=>{
    const [name,setName]=useState("")
    const refName=useRef("")
    const refshow=useRef("")

    const save=()=>{
        refshow.current.value=refName.current.value+"hello"
        refName.current.value=""

    }
    return(
        <>
        <label>name</label>
        <input ref={refName} onChange={(e)=>{setName(e.target.value)} }></input>
        <br/>
        
        <button onClick={save}>save</button>
        <p>{name}</p>
        <br></br>
        <p>{refshow}</p>
        </>
    )
   
}
export default SignUp