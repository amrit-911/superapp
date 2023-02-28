import React, { useState,useEffect } from 'react'
import styles from './Left2.module.css'
import loading from './loading.gif'

export default function Left2() {
    const date = new Date();

    const [weather,setWeather] = useState()

    const apiKey = "9db21b4dfc144dd98ae3206bdc111908"
    
    useEffect(() => {
        const fetchWeather = async()=>{
            const res= await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Mumbai?unitGroup=metric&key=LN7UX2PGNV8X2JERGSGN3WHKS&contentType=json
            `).then(
                async(data)=>await data.json(),
                
            )
            setWeather(res)
            console.log(weather)
        }
        fetchWeather()
        
      }, [])
      
      
  return (
    <div>
    {weather?<div className={styles.container}>
        <div className={styles.date_time}>
            <div className={styles.date}>{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</div> 
            <div className={styles.time}>{`${date.getHours()}:${date.getMinutes()}`}</div>
        </div>
        <div className={styles.weather_container}>
            <div>
            <div className={styles.cloud} >☁</div>
            <div className={styles.weather}>{weather.currentConditions.conditions}</div></div>
            
            <div>
                
                <div className={styles.degree}><div className={styles.line}>|</div>{weather.currentConditions.temp}°C</div>
                <div  className={styles.pressure}><div className={styles.thermo}>🌡</div>{weather.currentConditions.pressure} mbar <p>pressure</p><div className={styles.line2}>|</div></div>
            </div>
            
            <div>
                <div  className={styles.wind}><div className={styles.blow}>💨</div>{weather.currentConditions.windspeed} km/h wind</div>
                <div  className={styles.humidity}><div className={styles.drop}>💧</div>{weather.currentConditions.humidity} humidity</div>
            </div>

        </div>
    </div>:<div className={styles.loading}><img  src={loading} alt="" /></div>}</div>
  )
}
