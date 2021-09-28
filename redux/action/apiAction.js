 import axios from "axios"
 const apiAction=()=>{

    return async(dispatch,getState)=>{
        try{
           const {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
           dispatch({
               type:"FETCHAPI",
               payload:data
           })
        }catch(err){
            dispatch({
                type:"ERRORAPI",
                payload:err.message
            })
        }
    }
}