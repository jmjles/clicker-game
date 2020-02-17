import React from 'react'

export default function About() {
    return (
      <div className='gameInfo' id="gameInfo">
        <Font variant="h1" align="center">
          Levels
        </Font>
        <table style={{ margin: "auto" }}>
          <tbody>
            {characterTitles.map(config => (
              <tr
                key={config.title}
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                <td id="Ltitle" style={{ padding: ".5rem" }}>
                  <Font variant="body1">{config.title}</Font>
                </td>
                <td style={{ padding: ".5rem" }}>
                  <Font variant="body1">{config.count}</Font>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button variant="contained" onClick={gameInfoAni} className="gBack">
          <Font variant="button">Back</Font>
        </Button>
      </div>
    );
}
