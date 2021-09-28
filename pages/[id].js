import React from 'react'
import axios from 'axios'
import styles from "../styles/id.module.css"
const Id = ({data}) => {
    
    return (
        <div className={styles.user}>
            <h1>userID: {data.userId}</h1>
            <h1>Id: {data.id}</h1>
            <h1>title: {data.title}</h1>
            <h1>body: {data.body}</h1>
        </div>
    )
}

export default Id



// export const getServerSideProps=async({params})=>{
//     const {data}=await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
//     return {
//         props:{
//             data
//         }
//     }
// }

export const getStaticProps=async({params})=>{


    const {data}=await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    console.log(data);
    return{
      props:{
         data
      }
    }
  }

export const getStaticPaths=async()=>{
const {data}=await axios.get(`https://jsonplaceholder.typicode.com/posts`)

const id=data.map(el=>el.id)
const paths=id.map(Id=>({params:{id:Id.toString()}}))

return{
    paths,
     fallback:false
}
}