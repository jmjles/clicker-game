import React from "react";
import { Typography as Font, Button, Grid } from "@material-ui/core";
import { openCharacterSelection } from "../misc/AnimeGallery";
export default function GameArea({
  selectedChar: [{ url, alt, name, clicks, level }],
  increment
}) {
  return (
    <div className="GameArea">
      <figure>
        <img
          id="gpicmain"
          src={url}
          alt={alt}
          onClick={() => increment(name)}
        />
        <figcaption>
          <Font variant="h2">{name}</Font>
          <Grid container justify="space-around" alignItems="baseline">
            <Grid item>
              <Font variant="h3">{clicks}</Font>
            </Grid>
            <Grid item>
              <Font variant="h3">{level}</Font>
            </Grid>
          </Grid>
        </figcaption>
      </figure>
      <Button
        variant="contained"
        onClick={() => openCharacterSelection(true)}
        color="secondary"
      >
        <Font variant="button">Change Character</Font>
      </Button>
    </div>
  );
}
