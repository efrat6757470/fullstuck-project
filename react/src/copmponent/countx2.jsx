import { useEffect } from "react"
import { useState } from "react"
const Countx2=()=>{

    const [cnt2,setCnt2]=useState(0)
    const [cnt,setCnt]=useState(0)

    const cntx2=()=>{
      setCnt2(cnt*2)
        }
const showCnt=()=>{
setCnt(cnt+1)

}
useEffect(cntx2,[cnt])

    return(
        <>
        <button onClick={showCnt}></button>
        <p>{cnt}</p>
        <p>{cnt2}</p>
        </>
    )
}
export default Countx2;