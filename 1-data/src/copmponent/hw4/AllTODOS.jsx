import { useRef, useState } from "react"
import TODO from "./TODO"

const AllTODOS=()=>{
    const refId=useRef(0)
    const refName=useRef("")
    
    const doAction=(state,action)=>{
            switch(action.type){
                case "insert":
                    let x=state.map((m)=>{return m});
                    x.push(action.by)
                    return x;
                case "delete":
                     let d=state.filter((m)=>{return m.id!==action.by.id});
                     return d; 
                default :return state;

            }

    }
    const initialState=[{id:1,name:"aaa"},{id:2,name:"bbb"},{id:3,name:"ccc"}]
    const [arrTasks,dispatch]=(doAction,initialState)
    return(
        <>
        <label>id</label>
        <input ref={refId}></input>
        <br/>
        <label>name</label>
        <input ref={refName}></input>
        <br/>
        <button onClick={()=>{dispatch({type:"delete",by:{id:refId.current.value}})}}>delete</button>
        <button onClick={()=>{dispatch({type:"insert",by:{id:refId.current.value,name:refName.current.value}})}}>insert</button>
        {arrTasks.map(task=>{return <TODO task={task}></TODO>})}
        </>
    )
}
export default AllTODOS;