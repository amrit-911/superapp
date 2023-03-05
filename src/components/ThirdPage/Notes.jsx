import React, { useState } from 'react'
import styles from './Notes.module.css'
import pen from './pen.png'

export default function Notes() {
    const [notes,setNotes] = useState()

const changeHandler = (e) =>{
    setNotes(e.target.value)
    console.log(notes)
    
}

function clicked(){
    localStorage.setItem("Notes",JSON.stringify(notes))
    console.log("notes setd")
}

  return (
    <div className={styles.container}>
        <div className={styles.header}>All notes</div>
        <textarea name="" id="" maxLength={120} value={notes} defaultValue={JSON.parse(localStorage.getItem("Notes"))}  onChange={changeHandler}>
        </textarea>
        <button className={styles.notes_button}><img src={pen} onClick={clicked} alt=""/></button> 
    </div>
  )
}
