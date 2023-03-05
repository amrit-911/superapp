import React, { useRef, useState } from 'react'
import Countdown from 'react-countdown';

import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from './Timer.module.css'
import './navigation.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import arrowUp from './arrowup.png'
import arrowDown from './arrowdown.png'
SwiperCore.use([ Mousewheel]);




export default function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  const [timer,setTimer] =useState(0)

  const changeSeconds = (e) =>{
    setSeconds(e.realIndex)
  }
  const changeMinutes = (e)=>{
    setMinutes(e.realIndex)
  }
  const changeHours = (e)=>{
    setHours(e.realIndex)}

  const slideHoursNextRef = useRef();
  const slideHoursPrevRef = useRef();

  const slideMinutesNextRef = useRef();
  const slideMinutesPrevRef = useRef();

  const slideSecondsNextRef = useRef();
  const slideSecondsPrevRef = useRef();

  function clickStart(){
    setTimer(seconds + (minutes*60) + (hours*60*60))
    console.log(timer)
     
  }

  const getFormat = (second)=>{
    let total_minutes = parseInt(Math.floor(second/60))
    let total_hours = parseInt(Math.floor(total_minutes/60))

    let seconds = parseInt(second % 60)
    let minute = parseInt(total_minutes % 60)
    let hour = parseInt(total_hours % 24)

    return `${hour} : ${minute} : ${seconds}`
    
  }

  console.log("Hours: ",hours ,"Minutes: " ,minutes ,"seconds: ", seconds)
  console.log(timer)
  return (  
    <div className={styles.container}>
    <div className={styles.progress_container}>
    <CountdownCircleTimer
    isPlaying
    duration={timer}
    initialRemainingTime={0}
    remainingTime = {0}
    colors={["#ff0000","#ff0000","#ff0000","#ff0000"]}
    colorsTime={[0, 0, 0, 0]}
  >
    {({ remainingTime }) =>( <div className={styles.countdown}>{getFormat(remainingTime)}</div>)}
    
  </CountdownCircleTimer>
    </div>
    
    <div className={styles.slider_contianer}>
<div className={styles.flex}>

<div className={styles.swiper_div}>
      <div  className={styles.button} onClick={() => slideHoursPrevRef.current.slidePrev()}>
      <img className={styles.arrowUp} src={arrowUp} alt="" />
      </div>
    <Swiper
    onSwiper={(swiper) => {
    slideHoursNextRef.current = swiper;
    slideHoursPrevRef.current = swiper;
  }}
      onSlideChange={changeHours}

      direction='vertical'
      slidesPerView={1}
      loop 
      modules={[Pagination,Navigation]}
      className={styles.mySwiper}
      speed ={1}
      mousewheel={true}

      

    >
      <div className={styles.time}>
      <SwiperSlide>00</SwiperSlide>
      <SwiperSlide>01</SwiperSlide>
      <SwiperSlide>02</SwiperSlide>
      <SwiperSlide>03</SwiperSlide>
      <SwiperSlide>04</SwiperSlide>
      <SwiperSlide>05</SwiperSlide>
      <SwiperSlide>06</SwiperSlide>
      <SwiperSlide>07</SwiperSlide>
      <SwiperSlide>08</SwiperSlide>
      <SwiperSlide>09</SwiperSlide>
      <SwiperSlide>10</SwiperSlide>
      <SwiperSlide>11</SwiperSlide>
      <SwiperSlide>12</SwiperSlide>
      <SwiperSlide>13</SwiperSlide>
      <SwiperSlide>14</SwiperSlide>
      <SwiperSlide>15</SwiperSlide>
      <SwiperSlide>16</SwiperSlide>
      <SwiperSlide>17</SwiperSlide>
      <SwiperSlide>18</SwiperSlide>
      <SwiperSlide>19</SwiperSlide>
      <SwiperSlide>20</SwiperSlide>
      <SwiperSlide>21</SwiperSlide>
      <SwiperSlide>22</SwiperSlide>
      <SwiperSlide>23</SwiperSlide>
  
      </div>    
      </Swiper>
      <div className={styles.button} onClick={() => slideHoursNextRef.current.slideNext()}>
        <img className={styles.arrowDown} src={arrowDown} alt="" />
      </div>
      </div>
        <div style={{fontSize:"45px", position:"relative", bottom:"6px"}}>:</div>
      <div className={styles.swiper_div}>
      <div  className={styles.button} onClick={() => slideMinutesPrevRef.current.slidePrev()}>
      <img className={styles.arrowUp} src={arrowUp} alt="" />
      </div>
    <Swiper
    onSwiper={(swiper) => {
    slideMinutesNextRef.current = swiper;
    slideMinutesPrevRef.current = swiper;
  }}
      onSlideChange={changeMinutes}

      direction='vertical'
      slidesPerView={1}
      loop 
      mousewheel ={true}
      modules={[Pagination,Navigation]}
      className={styles.mySwiper}
      speed ={1}
      
    >
      <div className={styles.time}>
      <SwiperSlide>00</SwiperSlide>
      <SwiperSlide>01</SwiperSlide>
      <SwiperSlide>02</SwiperSlide>
      <SwiperSlide>03</SwiperSlide>
      <SwiperSlide>04</SwiperSlide>
      <SwiperSlide>05</SwiperSlide>
      <SwiperSlide>06</SwiperSlide>
      <SwiperSlide>07</SwiperSlide>
      <SwiperSlide>08</SwiperSlide>
      <SwiperSlide>09</SwiperSlide>
      <SwiperSlide>10</SwiperSlide>
      <SwiperSlide>11</SwiperSlide>
      <SwiperSlide>12</SwiperSlide>
      <SwiperSlide>13</SwiperSlide>
      <SwiperSlide>14</SwiperSlide>
      <SwiperSlide>15</SwiperSlide>
      <SwiperSlide>16</SwiperSlide>
      <SwiperSlide>17</SwiperSlide>
      <SwiperSlide>18</SwiperSlide>
      <SwiperSlide>19</SwiperSlide>
      <SwiperSlide>20</SwiperSlide>
      <SwiperSlide>21</SwiperSlide>
      <SwiperSlide>22</SwiperSlide>
      <SwiperSlide>23</SwiperSlide>
      <SwiperSlide>24</SwiperSlide>
      <SwiperSlide>25</SwiperSlide>
      <SwiperSlide>26</SwiperSlide>
      <SwiperSlide>27</SwiperSlide>
      <SwiperSlide>28</SwiperSlide>
      <SwiperSlide>29</SwiperSlide>
      <SwiperSlide>30</SwiperSlide>      
      <SwiperSlide>31</SwiperSlide>
      <SwiperSlide>32</SwiperSlide>
      <SwiperSlide>33</SwiperSlide>
      <SwiperSlide>34</SwiperSlide>
      <SwiperSlide>35</SwiperSlide>
      <SwiperSlide>36</SwiperSlide>
      <SwiperSlide>37</SwiperSlide>
      <SwiperSlide>38</SwiperSlide>
      <SwiperSlide>39</SwiperSlide>
      <SwiperSlide>40</SwiperSlide>      
      <SwiperSlide>41</SwiperSlide>
      <SwiperSlide>42</SwiperSlide>
      <SwiperSlide>43</SwiperSlide>
      <SwiperSlide>44</SwiperSlide>
      <SwiperSlide>45</SwiperSlide>
      <SwiperSlide>46</SwiperSlide>
      <SwiperSlide>47</SwiperSlide>
      <SwiperSlide>48</SwiperSlide>
      <SwiperSlide>49</SwiperSlide>
      <SwiperSlide>50</SwiperSlide>      
      <SwiperSlide>51</SwiperSlide>
      <SwiperSlide>52</SwiperSlide>
      <SwiperSlide>53</SwiperSlide>
      <SwiperSlide>54</SwiperSlide>
      <SwiperSlide>55</SwiperSlide>
      <SwiperSlide>56</SwiperSlide>
      <SwiperSlide>57</SwiperSlide>
      <SwiperSlide>58</SwiperSlide>
      <SwiperSlide>59</SwiperSlide>      
      </div>    
      </Swiper>
      <div className={styles.button} onClick={() => slideMinutesNextRef.current.slideNext()}>
        <img className={styles.arrowDown} src={arrowDown} alt="" />
      </div>
      </div>

      <div style={{fontSize:"45px", position:"relative", bottom:"6px"}}>:</div>
      <div className={styles.swiper_div}>
      <div  className={styles.button} onClick={() => slideSecondsPrevRef.current.slidePrev()}>
      <img className={styles.arrowUp} src={arrowUp} alt="" />
      </div>
    <Swiper
    onSwiper={(swiper) => {
    slideSecondsNextRef.current = swiper;
    slideSecondsPrevRef.current = swiper;
  }}
      onSlideChange={changeSeconds}
      direction='vertical'
      slidesPerView={1}
      loop 
      mousewheel ={true}
      modules={[Pagination,Navigation]}
      className={styles.mySwiper}
      speed ={1}
      
    >
      <div className={styles.time}>
      <SwiperSlide>00</SwiperSlide>
      <SwiperSlide>01</SwiperSlide>
      <SwiperSlide>02</SwiperSlide>
      <SwiperSlide>03</SwiperSlide>
      <SwiperSlide>04</SwiperSlide>
      <SwiperSlide>05</SwiperSlide>
      <SwiperSlide>06</SwiperSlide>
      <SwiperSlide>07</SwiperSlide>
      <SwiperSlide>08</SwiperSlide>
      <SwiperSlide>09</SwiperSlide>
      <SwiperSlide>10</SwiperSlide>
      <SwiperSlide>11</SwiperSlide>
      <SwiperSlide>12</SwiperSlide>
      <SwiperSlide>13</SwiperSlide>
      <SwiperSlide>14</SwiperSlide>
      <SwiperSlide>15</SwiperSlide>
      <SwiperSlide>16</SwiperSlide>
      <SwiperSlide>17</SwiperSlide>
      <SwiperSlide>18</SwiperSlide>
      <SwiperSlide>19</SwiperSlide>
      <SwiperSlide>20</SwiperSlide>
      <SwiperSlide>21</SwiperSlide>
      <SwiperSlide>22</SwiperSlide>
      <SwiperSlide>23</SwiperSlide>
      <SwiperSlide>24</SwiperSlide>
      <SwiperSlide>25</SwiperSlide>
      <SwiperSlide>26</SwiperSlide>
      <SwiperSlide>27</SwiperSlide>
      <SwiperSlide>28</SwiperSlide>
      <SwiperSlide>29</SwiperSlide>
      <SwiperSlide>30</SwiperSlide>      
      <SwiperSlide>31</SwiperSlide>
      <SwiperSlide>32</SwiperSlide>
      <SwiperSlide>33</SwiperSlide>
      <SwiperSlide>34</SwiperSlide>
      <SwiperSlide>35</SwiperSlide>
      <SwiperSlide>36</SwiperSlide>
      <SwiperSlide>37</SwiperSlide>
      <SwiperSlide>38</SwiperSlide>
      <SwiperSlide>39</SwiperSlide>
      <SwiperSlide>40</SwiperSlide>      
      <SwiperSlide>41</SwiperSlide>
      <SwiperSlide>42</SwiperSlide>
      <SwiperSlide>43</SwiperSlide>
      <SwiperSlide>44</SwiperSlide>
      <SwiperSlide>45</SwiperSlide>
      <SwiperSlide>46</SwiperSlide>
      <SwiperSlide>47</SwiperSlide>
      <SwiperSlide>48</SwiperSlide>
      <SwiperSlide>49</SwiperSlide>
      <SwiperSlide>50</SwiperSlide>      
      <SwiperSlide>51</SwiperSlide>
      <SwiperSlide>52</SwiperSlide>
      <SwiperSlide>53</SwiperSlide>
      <SwiperSlide>54</SwiperSlide>
      <SwiperSlide>55</SwiperSlide>
      <SwiperSlide>56</SwiperSlide>
      <SwiperSlide>57</SwiperSlide>
      <SwiperSlide>58</SwiperSlide>
      <SwiperSlide>59</SwiperSlide>  

    
      </div>    
      </Swiper>
      <div className={styles.button} onClick={() => slideSecondsNextRef.current.slideNext()}>
        <img className={styles.arrowDown} src={arrowDown} alt="" />
      </div>
      </div>
  </div>
  <button className={styles.start} onClick={clickStart}>Start</button>
  
  </div>
  </div>
  )
  }
