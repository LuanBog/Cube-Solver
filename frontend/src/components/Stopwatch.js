import React, { useState, useEffect } from 'react';

const Stopwatch = ({ generateScramble }) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    }
  }, [isActive]);

  const buttonClick = () => {
    if (isActive === false) {
      setIsActive(true);
      setTime(0);
    } else {
      setIsActive(false);
      generateScramble(20);
    }
  }

  return (
    <>
      <div className="timer">
        <span className="digits">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="digits">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
        </span>
        <span className="digits mili-sec">
          {("0" + ((time / 10) % 100)).slice(-2)}
        </span>
      </div>

      <button onClick={buttonClick}>Time {isActive ? <span>Off</span> : <span>On</span>}</button>
    </>
  );
}

export default Stopwatch;
