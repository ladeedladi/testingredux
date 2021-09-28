 import axios from "axios"
 export const apiAction=()=>{

    return async(dispatch,getState)=>{
        try{
           const {data}=await axios.get("https://jsonplaceholder.typicode.com/posts")
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