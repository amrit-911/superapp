import Left from "./Left";
import Left2 from "./Left2";
import React from 'react'
import News from "./News";
import styles from "./Profile.module.css"

export default function Profile() {
  return (<div className={styles.container}>
    <div>
    <div className={styles.left1}><Left/></div>
    <div className={styles.left2}><Left2/></div>
</div>
<div className={styles.news}><News/></div>

    </div>
  )
}
