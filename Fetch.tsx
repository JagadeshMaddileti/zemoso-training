import { useEffect } from "react";

const Fetch=()=>{
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response=>response.json())
      .then(data=>{
        console.log(data)
    })
      .catch(error=>console.log(error))
    },[])
    return(
    <>
    </>
    );
}
export default Fetch;


