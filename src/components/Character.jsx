import React from 'react'
import {Grid,Typography as Font} from '@material-ui/core'
export default function Character({character,setSelectedChar,openCharacterSelection}) {
    return (
      <Grid item id="charDiv" key={character.id} sm={4} xs={7}>
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
          onClick={() => {
            setSelectedChar(character);
            openCharacterSelection(false);
          }}
        />
        <Font variant="h4" align="center">
          {character.level}
        </Font>
      </Grid>
    );
}
