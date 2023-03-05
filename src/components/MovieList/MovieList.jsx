import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom';

import styles from './MovieList.module.css'
import profileImg from './profileImg.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel } from "swiper/core";
SwiperCore.use([ Mousewheel]);



export default function MovieList() {
    const [action,setaction] = useState()
    const [thriller,setThriller] = useState()
    const [horror,setHorror] = useState()
    const navigate = useNavigate();

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c3fc924177mshda4be008f5dfe44p11d649jsnb1833592cdc1',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    
    useEffect(() => {
          fetch('https://imdb8.p.rapidapi.com/auto-complete?q=fast', options)
        .then(response => response.json())
        .then(response => setaction(response.d))
        .catch(err => console.error(err));
    }, [])    
    useEffect(() => {
          fetch('https://imdb8.p.rapidapi.com/auto-complete?q=breaking', options)
        .then(response => response.json())
        .then(response => setThriller(response.d))
        .catch(err => console.error(err));
    }, [])   
     useEffect(() => {
          fetch('https://imdb8.p.rapidapi.com/auto-complete?q=nun', options)
        .then(response => response.json())
        .then(response => setHorror(response.d))
        .catch(err => console.error(err));
    }, [])
    
    function clickProfile(){
        navigate("/profile")
    }
console.log(action)

  return (
    
    <div className={styles.container}>
        <div className={styles.navbar}>
            <div className={styles.brand}>Superapp</div>
            <div onClick={clickProfile} className={styles.profile}>
                <img className={styles.profile_img} src={profileImg} alt="" />
            </div>
        </div>
        <p>Entertainment according to your choice</p>
        <div className={styles.movies_container}>
            <div className={styles.action_conatiner}>
                <div className={styles.genere}>Action</div>
                <Swiper slidesPerView={4} mousewheel={true}>
                {action?action.map((item)=><SwiperSlide className={styles.action_slide}><img src={item.i.imageUrl} /></SwiperSlide>):""}

                </Swiper>
            </div>
            <div className={styles.Thriller_conatiner}><div className={styles.genere}>Thriller</div>
                <Swiper slidesPerView={4} mousewheel={true}>
                {thriller?thriller.map((item)=><SwiperSlide className={styles.action_slide}><img src={item.i.imageUrl} /></SwiperSlide>):""}

                </Swiper></div>
            <div className={styles.Horror_conatiner}><div className={styles.genere}>Horror</div>
                <Swiper slidesPerView={4} mousewheel={true}>
                {horror?horror.map((item)=><SwiperSlide className={styles.action_slide}><img src={item.i.imageUrl} /></SwiperSlide>):""}
                </Swiper></div>
        </div>
    </div>
  )
}
