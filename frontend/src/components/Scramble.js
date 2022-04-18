import React, { useEffect } from 'react';

const Scramble = ({ scramble, generateScramble }) => {
  useEffect(() => {
    generateScramble(20);
  }, []);

  return (
    <>
      <p>Scramble: {scramble}</p>
      <button onClick={() => generateScramble(20)}>Scramble!</button>
    </>
  );
}

export default Scramble;
