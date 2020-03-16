import React from "react";
import {
  Paper,
  Typography as Font,
  Container,
  Button,
  Grid
} from "@material-ui/core";
import GameArea from "./GameArea";
import CharacterSelection from "./CharacterSelection";
import About from "./About";
import logo from "../assets/pics/logo.png";
import { openGameInfo } from "../misc/AnimeGallery";
export default function Clicker({ selectedChar, increment, characters }) {
  return (
    <div className="AppRoot">
      <Paper square elevation={5} component="nav">
        <Container maxWidth="md">
          <Grid container alignItems="center">
            <Grid item>
              <img src={logo} alt="Jesus MJ Logo" />
            </Grid>
            <Grid item>
              <Button
                component="a"
                href="https://jesusmj.com"
                variant="contained"
                color="primary"
              >
                <Font variant="button">Back Home</Font>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Container maxWidth="sm" className="Root">
        <Paper elevation={0} className="HeaderPaper" component="article">
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <About />
            </Grid>
            <Grid item>
              <Font align="center" variant="h2">
                Clicker Game
              </Font>
            </Grid>
            <Grid item>
              <GameArea selectedChar={selectedChar} increment={increment} />
            </Grid>
            <Grid item>
              <CharacterSelection
                setSelectedChar={selectedChar[1]}
                characters={characters}
              />
            </Grid>
            <Grid item>
              <Button
                onClick={() => openGameInfo(true)}
                variant="contained"
                color="secondary"
              >
                <Font variant="button">How To Play</Font>
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
