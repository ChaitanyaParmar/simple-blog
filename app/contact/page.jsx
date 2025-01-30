import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export default function Contact() {
  return (
    <div className= {styles.container}>
      <h1 className= {styles.title}>Let's Keep in Touch</h1>
      <div className= {styles.content}>
        <div className= {styles.imgContainer}>
          <Image
            src="/images/contact.png"
            alt=''
            fill={true}
            className={styles.img}
          />
        </div>
        <form className= {styles.form}>
          <input type='text' placeholder='Name' className={styles.input}/>
          <input type='email' placeholder='Email' className={styles.input}/>
          <textarea className={styles.textArea} placeholder='Message' cols={"30"} rows={"10"}></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  )
}
