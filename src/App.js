import React,{useState} from 'react'
//Pics
import ghostPic from './assets/pics/ghost.png'
import ghoulPic from './assets/pics/ghoul.png'
import pumpkinPic from './assets/pics/pumpkin.png'

import Clicker from './components/Clicker'
export default function App() {
  const [ghoul, setGhoul] = useState({
    name: "Ghoul",
    level: "Noob",
    url: ghostPic,
    clicks: 0,
    id: "1",
    alt: "Ghoul Character Pic"
  });
  const [ghost, setGhost] = useState({
    name: "Ghost",
    level: "Noob",
    url: ghoulPic,
    clicks: 0,
    id: "2",
    alt: "Ghost Character Pic"
  });
  const [pumpkin, setPumpkin] = useState({
    name: "Pumpkin",
    level: "Noob",
    url: pumpkinPic,
    clicks: 0,
    id: "3",
    alt: "Pumpkin Character Pic"
  });
  const [characters,setCharacters]= useState([ghoul,ghost,pumpkin])

  return (
    <Clicker characters={characters}/>
  )
}
