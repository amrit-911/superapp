import Left from "./Left";
import Left2 from "./Left2";
import React from 'react'
import News from "./News";
import styles from "./Profile.module.css"
import Timer from "./Timer";
import Notes from "./Notes";
import {useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  function clickBrowse(){
    navigate("/movie")
  }
  return (
    <>
  <div className={styles.container}>
    <div className={styles.inner_container}>
    <div className={styles.section1}>
    <div >
    <div className={styles.left1}><Left/></div>
    <div className={styles.left2}><Left2/></div>
    </div>
    <div className={styles.notes}>
      <Notes/>
    </div>
    </div>
    <div className={styles.timer}>
      <Timer/>
    </div>
    </div>
    <div  className={styles.news}><News/><button onClick={clickBrowse} className={styles.browse}>Browse</button></div>
  </div>
  
  </>
  )
}
