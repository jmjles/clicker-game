import React from "react";
import { Typography as Font, Grid, Button } from "@material-ui/core";
import { openCharacterSelection } from "../misc/AnimeGallery";
export default function CharacterSelection({ characters, setSelectedChar }) {
  return (
    <div className="CharacterSelect">
      <Font variant="h2" align="center" className="two">
        Character Selection
      </Font>
      <Grid container justify="space-around">
        {characters.map(character => (
          <Grid item id="charDiv" key={character.id} md={3}>
            <Font
              align="center"
              variant="h3"
              className="text-center"
              onClick={() => setSelectedChar(character)}
            >
              {character.name}
            </Font>
            <img
              id="gpic"
              src={character.url}
              alt={character.alt}
              onClick={
                (() => {setSelectedChar(character)
                  openCharacterSelection(false)})
              }
            />
            <Font variant="h4" align="center">
              {character.level}
            </Font>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" onClick={() => openCharacterSelection(false)}>
        <Font variant="body1">Back</Font>
      </Button>
    </div>
  );
}
