"use client"

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'

const Dashboard = () => {
  const [ data, setData ] = useState([])
  const [ err, setErr ] = useState([])

  useEffect(()=>{
    const getData = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-store",
      });
    
      if(!res.ok){
        setErr(true);
      }
    
      return res.json();
    }
  }, [])
  return (
    <div className={styles.container}>
    </div>
  )
}

export default Dashboard