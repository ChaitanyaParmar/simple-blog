import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if(!res.ok){
    throw new Error('Failed to fetch data');
  }

  return res.json();
}


const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dicta maxime eveniet earum sequi officia, neque odio reprehenderit, tenetur quos libero saepe error perspiciatis, quas nemo non numquam animi enim.
          </p>
          <div className={styles.author}>
            <Image
              src={"https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
        <Image
              src={"https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
              alt=''
              fill={true}
              className={styles.image}
            />
        </div>
      </div>
      <div className={styles.content}>
        <p lassName={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam soluta maiores corporis, quaerat non suscipit facilis eius blanditiis expedita voluptas atque voluptate necessitatibus doloremque optio reprehenderit. Corrupti, cumque perferendis?
          <br/>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis possimus labore veritatis nulla at fugiat deserunt blanditiis, atque neque accusantium rem, assumenda enim libero aut numquam quia consequuntur ullam ut eaque delectus? Nesciunt consequuntur quam eos ipsa labore vitae corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae harum repudiandae maiores qui veritatis temporibus.
          <br/>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vel minus, autem modi possimus odit dolorem, asperiores unde cupiditate necessitatibus ullam, eum alias. Ea quaerat vitae sit nulla qui molestiae impedit, esse dolor quod, doloremque ipsum. Magni dicta beatae, voluptatum corrupti expedita enim molestias ab delectus, voluptate deserunt aliquam dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit fugit aperiam veniam cupiditate perferendis iure aliquam ipsa doloremque praesentium.
        </p>
      </div>
    </div>
  )
}

export default BlogPost
