import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios"
import Link from "next/link"
export default function Home({data}) {


  return (
    <div className={styles.container}>
    {data.map(el=>(
      <Link href={`/${el.id}`}>
    <div className={styles.users} key={el.id}>
    <h1>{el.id}</h1>
    <p>{el.title.slice(0,10)}</p>
    </div>
    </Link>
    ))}
    </div>
  )
}


export const getStaticProps=async()=>{

  const {data}=await axios.get("https://jsonplaceholder.typicode.com/posts")
  console.log(data);
  return{
    props:{
       data
    }
  }
}

