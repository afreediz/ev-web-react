import { useEffect, useState } from "react"
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";


const App = () => {
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
      <Navbar/>
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

export default App