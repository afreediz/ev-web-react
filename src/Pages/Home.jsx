import React from 'react'
import { useState, useEffect } from 'react'
import Background from '../components/Background/Background'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer'
const Home = () => {
    let heroData = [
        {text1:"Dive Into", text2:"What you love!"},
        {text1:"indulge", text2:"Your Passion"},
        {text1:"Give Into", text2:"What you love!"},
      ]
      const [heroCount, setHeroCount] = useState(0);
      const [playStatus, setPlayStatus] = useState(false); 
    
      useEffect(()=>{
        setInterval(() => {
          setHeroCount((count)=>{return count ===2?0:count+1})
        }, 3000);
      },[])
    
      return (
        <div>
          <Background playStatus={playStatus} heroCount={heroCount} />
          <Hero
            setPlayStatus={setPlayStatus}
            heroData={heroData[heroCount]}
            heroCount={heroCount}
            setHeroCount={setHeroCount}
            playStatus={playStatus}
          />
        </div>
      )
}

export default Home
