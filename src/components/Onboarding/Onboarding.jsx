import React, { useRef, useState } from 'react'
import styles from  './Onboarding.module.css';
import {useNavigate } from 'react-router-dom';

import action from './images/action.png'
import drama from './images/drama.png'
import fantasy from './images/fantasy.png'
import western from './images/western.png'
import fiction from './images/fiction.png'
import horror from './images/horror.png'
import music from './images/music.png'
import romance from './images/romance.png'
import thriller from './images/thriller.png'


export default function Onboarding(){

const check1 = useRef(null)
const check2 = useRef(null)
const check3 = useRef(null)
const check4 = useRef(null)
const check5 = useRef(null)
const check6 = useRef(null)
const check7 = useRef(null)
const check8 = useRef(null)
const check9 = useRef(null)
const [select, setSelect] = useState("")
  let a =""
const[value, setValue] = useState([])
  const changeHandler = (e)=>{
    if(e.target.checked === true){
    a = e.target.value
    setValue((ls)=>[...ls,a])

    }

    else if(e.target.checked===false){
      value.indexOf(e.target.value)
      value.splice((value.indexOf(e.target.value)),1);
      setValue((ls)=>[...ls])
    }
  }
  const onDelete =(item,index)=>{
    console.log("index:",index)
    var newList = value
    newList.splice(index,1)
    setValue([...newList])
    console.log(check1.current.checked)
    if(item === check1.current.value){
    check1.current.checked = false
    }
    if(item === check2.current.value){
    check2.current.checked = false
    }if(item === check3.current.value){
    check3.current.checked = false
    }if(item === check4.current.value){
    check4.current.checked = false
    }if(item === check5.current.value){
    check5.current.checked = false
    }if(item === check6.current.value){
    check6.current.checked = false
    }if(item === check7.current.value){
    check7.current.checked = false
    }if(item === check8.current.value){
    check8.current.checked = false
    }if(item === check9.current.value){
    check9.current.checked = false
    }
  }
const navigate = useNavigate();

  function clickNext(){
    if(value.length>2){
      console.log("Next Page...")
      navigate("/profile")
      console.log(value)
      localStorage.setItem("Selected Genere",JSON.stringify(value))
    }else{
      setSelect("Choose atleast three genere")
    }
  }
  return (
    <div className={styles.main}>
    <div className={styles.left}>
    <div className={styles.brand}>Super app</div>
    <p>Choose your entertainment category</p>
    
    <div className={styles.choose_container}>{value.map((item,index)=> 
    <div  key={index}>
        <div className={styles.choose_div}><div className={styles.choose}>{item}<div className={styles.choose_button} onClick={()=>onDelete(item,index) }>X</div></div></div>
    </div>)} 
    </div>
     
    </div>
      <div className={styles.right}>
          {/* <input type="checkbox" ref={check1} value="action"  onChange={changeHandler} />
          <input type="checkbox" value="drama" ref={check2} onChange={changeHandler} />
          <input type="checkbox" value="romance" ref={check3} onChange={changeHandler} />
          <input type="checkbox" value="western"  ref={check4} onChange={changeHandler} />
          <input type="checkbox" value="horror"  ref={check5} onChange={changeHandler} />
          <input type="checkbox" value="fantasy"  ref={check6} onChange={changeHandler} /> */}



            <div className={styles.flex_wrap}>
              <div htmlFor={styles.radio_1} className={`${styles.radio_container} ${styles.color1}`}>
                <input type="checkbox"  id={styles.radio_1} className={styles.radio} ref={check1} value="action"  onChange={changeHandler}/>
                <div className={styles.radio_label1}>
                  <label htmlFor={styles.radio_1}>
                    <div className={styles.radio_category}>Action</div>
                    <img className={styles.category_image} src={action} alt="" />
                  </label>
                </div>
              </div>
                    
               <div className={`${styles.radio_container} ${styles.color2}`}>
                <input type="checkbox" id={styles.radio_2} className={styles.radio} value="drama" ref={check2} onChange={changeHandler}/>
                <div className={styles.radio_label2}>
                  <label htmlFor={styles.radio_2}>
                    <div className={styles.radio_category}>Drama</div>
                    <img className={styles.category_image} src={drama} alt="" />
                  </label>
                </div>
              </div>

              <div className={`${styles.radio_container} ${styles.color3}`}>
                <input type="checkbox" id={styles.radio_3} className={styles.radio} value="romance" ref={check3} onChange={changeHandler} />
                <div className={styles.radio_label3}>
                  <label htmlFor={styles.radio_3}>
                    <div className={styles.radio_category}>Romance</div>
                    <img className={styles.category_image} src={romance} alt="" />
                  </label>
                </div>
              </div>

              <div className={`${styles.radio_container} ${styles.color4}`}>
                <input type="checkbox" id={styles.radio_4} className={styles.radio} value="thriller"  ref={check4} onChange={changeHandler}/>
                <div className={styles.radio_label4}>
                  <label htmlFor={styles.radio_4}>
                    <div className={styles.radio_category}>Thriller</div>
                    <img className={styles.category_image} src={thriller} alt="" />
                  </label>
                </div>
              </div>

              <div className={`${styles.radio_container} ${styles.color5}`}>
                <input type="checkbox" id={styles.radio_5} className={styles.radio} value="western"  ref={check5} onChange={changeHandler}/>
                <div className={styles.radio_label5}>
                  <label htmlFor={styles.radio_5}>
                    <div className={styles.radio_category}>Western</div>
                    <img className={styles.category_image} src={western} alt="" />
                  </label>
                </div>
              </div>

              <div className={`${styles.radio_container} ${styles.color6}`}>
                <input type="checkbox" id={styles.radio_6} className={styles.radio} value="horror"  ref={check6} onChange={changeHandler}/>
                <div className={styles.radio_label6}>
                  <label htmlFor={styles.radio_6}>
                    <div className={styles.radio_category}>Horror</div>
                    <img className={styles.category_image} src={horror} alt="" />
                  </label>
                </div>
              </div>

              <div className={`${styles.radio_container} ${styles.color7}`}>
                <input type="checkbox" id={styles.radio_7} className={styles.radio} value="fantasy"  ref={check7} onChange={changeHandler}/>
                <div className={styles.radio_label7}>
                  <label htmlFor={styles.radio_7}>
                    <div className={styles.radio_category}>Fantasy</div>
                    <img className={styles.category_image} src={fantasy} alt="" />
                  </label>
                </div>
              </div>

              <div className={`${styles.radio_container} ${styles.color8}`}>
                <input type="checkbox" id={styles.radio_8} className={styles.radio} value="music"  ref={check8} onChange={changeHandler} />
                <div className={styles.radio_label8}>
                  <label htmlFor={styles.radio_8}>
                    <div className={styles.radio_category}>Music</div>
                    <img className={styles.category_image} src={music} alt="" />
                  </label>
                </div>
              </div>

              <div className={`${styles.radio_container} ${styles.color9}`}>
                <input type="checkbox" id={styles.radio_9} className={styles.radio} value="fiction"  ref={check9} onChange={changeHandler}/>
                <div className={styles.radio_label9}>
                  <label htmlFor={styles.radio_9}>
                    <div className={styles.radio_category}>Fiction</div>
                    <img className={styles.category_image} src={fiction} alt="" />
                  </label>
                </div>
              </div>
            </div><div style={{color: "red", position:"absolute", right:"60px", bottom:"80px"}}>{select}</div>
            <div className={styles.next_div}><button onClick={clickNext} className={styles.next_button}>Next Page</button></div>



          </div>
      </div>
    )
  }
 