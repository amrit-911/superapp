import React, { useState,useEffect } from 'react'
import styles from './Left.module.css';
import jett from './jett.png'


export default function Left() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.image_container}>
          <img  alt="" className={styles.image} />
        </div>
        <div className={styles.details_container}>
          <div className={styles.name}>{JSON.parse(localStorage.getItem("FormValues")).name}</div>
          <div className={styles.email}>{JSON.parse(localStorage.getItem("FormValues")).email}</div>
          <div className={styles.username}>{JSON.parse(localStorage.getItem("FormValues")).userName}</div>
          <div className={styles.genere_container}>
            {JSON.parse(localStorage.getItem("Selected Genere")).map((item,index)=>(

            <div key={index} className={styles.genere_div}>{item}</div>)
            
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
