import React, { useState } from "react";
//Pics
import ghostPic from "./assets/pics/ghost.png";
import ghoulPic from "./assets/pics/ghoul.png";
import pumpkinPic from "./assets/pics/pumpkin.png";

import Clicker from "./components/Clicker";
export default function App() {
  const [ghoul, setGhoul] = useState({
    name: "Ghoul",
    level: "Noob",
    url: ghoulPic,
    clicks: 0,
    alt: "Ghoul Character Pic"
  });
  const [ghost, setGhost] = useState({
    name: "Ghost",
    level: "Noob",
    url: ghostPic,
    clicks: 0,
    alt: "Ghost Character Pic"
  });
  const [pumpkin, setPumpkin] = useState({
    name: "Pumpkin",
    level: "Noob",
    url: pumpkinPic,
    clicks: 0,
    alt: "Pumpkin Character Pic"
  });
  const [selectedChar, setSelectedChar] = useState(ghoul);

  const lvlUp = clicks => {
    return clicks < 10
      ? "Noob"
      : clicks < 30
      ? "Beginner"
      : clicks < 60
      ? "Amatuer"
      : clicks < 100
      ? "Adventurer"
      : clicks < 150
      ? "Thumping Rabbit"
      : clicks < 200
      ? "Pro"
      : clicks < 300
      ? "Tapping Ninja"
      : "Godlike";
  };
  const increment = name => {
    switch (name) {
      case "Ghoul":
        setSelectedChar({
          ...selectedChar,
          clicks: (selectedChar.clicks += 1),
          level: lvlUp(selectedChar.clicks)
        });
        setGhoul({
          ...ghoul,
          clicks: (ghoul.clicks += 1),
          level: lvlUp(ghoul.clicks)
        });
        break;
      case "Ghost":
        setSelectedChar({
          ...selectedChar,
          clicks: (selectedChar.clicks += 1),
          level: lvlUp(selectedChar.clicks)
        });
        setGhost({
          ...ghost,
          clicks: (ghost.clicks += 1),
          level: lvlUp(ghost.clicks)
        });
        break;
      case "Pumpkin":
        setSelectedChar({
          ...selectedChar,
          clicks: (selectedChar.clicks += 1),
          level: lvlUp(selectedChar.clicks)
        });
        setPumpkin({
          ...pumpkin,
          clicks: (pumpkin.clicks += 1),
          level: lvlUp(pumpkin.clicks)
        });
        break;
      default:
        console.log("Unknown Character");
        break;
    }
  };

  return (
    <Clicker
      characters={[ghost, ghoul, pumpkin]}
      selectedChar={[selectedChar, setSelectedChar]}
      increment={increment}
    />
  );
}
