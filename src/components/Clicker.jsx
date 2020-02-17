import React from 'react'
import {Paper,Fab,Typography as Font} from '@material-ui/core'
import GameArea from './GameArea'
export default function Clicker({selectedChar,increment}) {
    return (
      <div>
        <Paper elevation={0} className='headerPaper'>
          <Fab id="i">
            ?
          </Fab>
          <Font align="center" variant="h1">
            Clicker Game
          </Font>
        </Paper>
        <GameArea selectedChar={selectedChar} increment={increment}/>
      </div>
    );
}
