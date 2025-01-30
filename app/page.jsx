import Image from 'next/image'
import styles from './page.module.css'
import Hero from '/public/images/hero.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from global tech industry.
        </p>
        <Button url="#" text="See Our Works"/>
      </div>
      <div className={styles.item}>
        {/* <Image src={'/images/hero.png'} width={500} height={500} alt='home img'/> */}
        <Image src={Hero} alt='Home Image' className={styles.img}/>
      </div>
    </div>
  )
}
