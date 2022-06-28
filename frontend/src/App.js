import React, { useState } from 'react';
import Scramble from './components/Scramble';
import MainTimer from './components/Timer/MainTimer';

import './css/styles.css';

const App = () => {
  const [scramble, setScramble] = useState('');

  const generateScramble = (amount) => {
    const notations = ["R", "R'", "R2", "L", "L'", "L2", "U", "U'", "U2", "D", "D'", "D2", "F", "F'", "F2", "B", "B'", "B2"];
    let currentScramble = [];

    for (let i = 0; i < amount; i++) {
      let chosenNotation = notations[Math.floor(Math.random() * notations.length)];

      // Changes if the notation after chosen notation is the same
      if (i > 0)
        while (chosenNotation.charAt(0) === currentScramble[i - 1].charAt(0))
          chosenNotation = notations[Math.floor(Math.random() * notations.length)];

      currentScramble.push(chosenNotation);
    }

    setScramble(currentScramble.join(' '));
  }

  return (
    <>
      <h1>Cube Solver</h1>

      <Scramble scramble={scramble} generateScramble={generateScramble} />
      <MainTimer generateScramble={generateScramble} />
    </>
  );
}

export default App;
