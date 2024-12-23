import { useState } from "react"

const CountBtn4 = () => {
    const [count, setCount] = useState(0);
    return (

        <>
            {count == 6 ?
                <>  {alert("הגעת לספרה 6")}
                    {setCount(0)}
                </>:<></>}
            <button onClick={()=>setCount(count + 1)}>click me</button>
        </>
    )
}
export default CountBtn4;