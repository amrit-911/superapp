import React from 'react'
import styles from './MovieList.module.css'
export default function MovieList() {
  return (
    <div className={styles.container}>
        <div className={styles.navbar}>
            <div className={styles.brand}></div>
            <div className={styles.profile}>
                <img className={styles.profile_img} src="" alt="" />
            </div>
        </div>
    </div>
  )
}
