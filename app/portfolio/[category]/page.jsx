import React from 'react'
import styles from './page.module.css'  
import Button from '@/components/Button/Button'
import Image from 'next/image';

const Category = ({params}) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Test</h1>
          <p>Desc</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
          fill={true}
          alt=''
          src={"https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Test</h1>
          <p>Desc</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
          fill={true}
          alt=''
          src={"https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"}/>
        </div>
      </div>
    </div>
  )
}

export default Category