import { useRef } from "react";
import { useEffect, useState } from "react"


const School = () => {

    const teachers = ["kh", "ljl"];
    const courses = ["xx", "lxxl"];
    const [welcome, setWelcome] = useState(" ")
    const [isShowT, setIsShowT] = useState(false)
    const [isShowC, setIsShowC] = useState(false)
    const [issignUp, setsignUp] = useState(false)
    const refStudName=useRef("")
    const refCourse=useRef("")
    const [finish, setFinish] = useState(false)

    const showTeachers = () => {
        setIsShowT(true)
        setWelcome("")
    }
    const showCourses = () => {
        setIsShowC(true)
        setWelcome("")
    }
    const signUp = () => {
        setFinish(false)
        setsignUp(true)
        setWelcome("")
    }
    const finsignUp = () => {
        setsignUp(false)
        setFinish(true)
        setWelcome("")


    }


    useEffect(() => { setWelcome("welcome") }, [])



    // useEffect(()=>{alert("welcome")},[])
    return (
        <>
            <h1>{welcome}</h1>

            {isShowC && <h5>courses list:</h5>&&courses.map(e => { return (<>{e} </>) })}<br/>
            {isShowT&& <h5>teachers list:</h5> && teachers.map(e => { return (<>{e} </>) })}<br/>
            <button onClick={showTeachers}>show teachers</button><br />
            <button onClick={showCourses}>show  courses</button><br/>
            <button onClick={signUp}>sign up</button><br/>
            {issignUp && <input ref={refStudName}></input>}
            {issignUp && <input ref={refCourse}></input>}
            {issignUp&&<button onClick={finsignUp}>finish sign up</button>}<br/>
            {finish&&<h5>{refStudName.current.value} signed up to {refCourse.current.value}</h5>}
        </>
    )

}
export default School;