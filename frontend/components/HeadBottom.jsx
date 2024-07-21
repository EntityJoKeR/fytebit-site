import React from 'react'
import styles from './styles/HeadBottom.module.scss'


export default function HeadBottom() {
  return (
    <section className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.block}>
                <img src='img/1.svg'/>
                <p>Придумай<br/>идею</p>
            </div>
            <div className={styles.block}>
                <img src='img/2.svg'/>
                <p>Заполни<br/>форму</p>
            </div>
            <div className={styles.block}>
                <img src='img/3.svg'/>
                <p>Забери готовый<br/>проект</p>
            </div>
            <div className={styles.block}>
                <img src='img/4.svg'/>
                <p>Напиши<br/>отзыв</p>
            </div>
        </div>
    </section>
  )
}


