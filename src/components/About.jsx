import React from 'react'
import {Typography as Font, Button} from '@material-ui/core' 
import {openGameInfo} from '../misc/AnimeGallery'
export default function About() {
      const characterTitles = [
        {
          title: "Beginner:",
          count: "10"
        },
        {
          title: "Amatuer:",
          count: "30"
        },
        {
          title: "Adventurer:",
          count: "60"
        },
        {
          title: "Thumping Rabbit:",
          count: "100"
        },
        {
          title: "Pro:",
          count: "150"
        },
        {
          title: "Tapping Ninja:",
          count: "200"
        },
        {
          title: "GodLike:",
          count: "300"
        }
      ];
    return (
      <div className='GameInfo'>
        <Font variant="h1" align="center" >
          Levels
        </Font>
        <table style={{ margin: "auto" }}>
          <tbody>
            {characterTitles.map(({title,count}) => (
              <tr
                key={title}
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                <td id="Ltitle" style={{ padding: ".5rem" }}>
                  <Font variant="body1">{title}</Font>
                </td>
                <td style={{ padding: ".5rem" }}>
                  <Font variant="body1">{count}</Font>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button variant="contained" className="gBack" onClick={()=>openGameInfo(false) }>
          <Font variant="button">Back</Font>
        </Button>
      </div>
    );
}
