import React, { useEffect, useState } from 'react'
import styles from './News.module.css'
import newsimg from './newsimg.png'
import loading from './loading.gif'
export default function News() {
    const [random,setRandom] = useState(Math.floor(Math.random() * 6)) 
    const [news,setNews] = useState()
console.log(random)
    const apiKey = "pub_17980f3b47fa0ff3f53c48b211853630682aa"
    
    useEffect(() => {
        const fetchNews = async()=>{
            const res= await fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&country=ca,us,jp&language=en`).then(
                async(data)=>await data.json(),
            )
            setNews(res)
        }
        fetchNews()

      }, [])

      
      console.log(news)
      const date = new Date();

      return (
        <div>
            {news?<div className={styles.container}>
        <div className={styles.image_container}>
            {news.results[random].image_url?<img src={news.results[random].image_url} alt=""/>:<img src={newsimg} alt=""/>}
            <div className={styles.headline_container}>
                <div className={styles.image_overlay}>
                <div className={styles.headline}>{news.results[random].title}</div>
                <div className={styles.date_time}>
                <div className={styles.date}>{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</div>
                <div className={styles.time}>{`${date.getHours()}:${date.getMinutes()}`}</div>
                </div></div>
            </div>
        </div>
        <div className={styles.news}>
            <p>{news.results[random].description?news.results[random].description:"Check out the other news by refreshing"}</p>
        </div>
    </div>:<div className={styles.loading}><img src={loading} alt="" /></div>}</div>
  )
}
