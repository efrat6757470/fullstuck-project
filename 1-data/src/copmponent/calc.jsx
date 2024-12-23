import { useRef, useState } from "react"


const Calc=()=>{
    const refCalc=useRef("")
    const[dval,setdVal]=useState(0)
const toDollar=()=>{setdVal(parseInt(refCalc.current.value)*3.7)}
    return(
<>

<input ref={refCalc}/>
<button onClick={toDollar}>parse</button>
<p>{dval}</p>
</>
    )
}
export default Calc;