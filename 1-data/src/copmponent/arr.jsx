const ShowArr=()=>{

    const Arr = ["Rehovot","Jerusalen"]
    return(
        <>
        {
            Arr.map((item)=>{
                return(
                    <h3 style={{color:"aqua"}}>
                    {item}
                    </h3>
                )
            })
        }
        </>
    )
}
export default ShowArr;