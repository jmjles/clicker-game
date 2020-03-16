import React from "react";
import {
  Typography as Font,
  Grid,
  Button,
  Paper,
  Container
} from "@material-ui/core";
import { openCharacterSelection } from "../misc/AnimeGallery";
import Character from "./Character";
export default function CharacterSelection({ characters, setSelectedChar }) {
  return (
    <Paper className="CharacterSelect" square>
      <Font variant="h3" align="center">
        Character Selection
      </Font>
      <Container maxWidth='lg'>
        <Grid container justify="space-around" spacing={5}>
          {characters.map(character => (
            <Character
              key={character.name}
              character={character}
              setSelectedChar={setSelectedChar}
              openCharacterSelection={openCharacterSelection}
            />
          ))}
        </Grid>
      </Container>

      <Button
        variant="contained"
        onClick={() => openCharacterSelection(false)}
        color="secondary"
      >
        <Font variant="body1">Back</Font>
      </Button>
    </Paper>
  );
}
