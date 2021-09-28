import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import axios from "axios"
import Link from "next/link"
import { apiAction } from '../redux/action/apiAction'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function Home() {
  const api=useSelector(state=>state.api)
  const dispatch=useDispatch()
  useEffect(() => {
   dispatch(apiAction())

  }, [])
console.log(api);

  return (
    <div className={styles.container}>
    {api.map(el=>(
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



