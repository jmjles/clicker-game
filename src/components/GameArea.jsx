import React from "react";
import { Typography as Font, Button } from "@material-ui/core";
import {openCharacterSelection} from '../misc/AnimeGallery'
export default function GameArea({
  selectedChar: [{ url, alt, name, clicks, level }],
  increment
}) {
  return (
    <div className="gameArea">
      <figure>
        <img
          id="gpicmain"
          src={url}
          alt={alt}
          onClick={() => increment(name)}
        />
        <figcaption>
          <Font variant="h2">{name}</Font>
          <Font variant="h3">{clicks}</Font>
          <Font variant="h4">{level}</Font>
        </figcaption>
      </figure>
      <Button variant="contained" onClick={()=>openCharacterSelection(true)}>
        <Font variant="button">Change Character</Font>
      </Button>
    </div>
  );
}
