import React, { useEffect } from 'react';

const Stopwatch = ({ stopWatchTime, setStopWatchTime, stopWatchActive, setStopWatchActive, generateScramble }) => {
  
  // Handles adding time when the stopwatch is active
  useEffect(() => {
    let interval = null;

    if (stopWatchActive) {
      interval = setInterval(() => {
        setStopWatchTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    }
  }, [stopWatchActive]);

  return (
    <>
      <div className="stopwatch">
        <span className="digits">
          {("0" + Math.floor((stopWatchTime / 60000) % 60)).slice(-2)}:
        </span>
        <span className="digits">
          {("0" + Math.floor((stopWatchTime / 1000) % 60)).slice(-2)}.
        </span>
        <span className="digits mili-sec">
          {("0" + ((stopWatchTime / 10) % 100)).slice(-2)}
        </span>
      </div>
    </>
  );
}

export default Stopwatch;
