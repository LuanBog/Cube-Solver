import React, { useState, useEffect, useRef } from 'react';

const useKey = (key, callback) => {
  const callbackRef = useRef(callback);
  let fired = false;

  useEffect(() => {
    callbackRef.current = callback;
  }, [key]);

  // Key Down
  useEffect(() => {
    const handle = (event) => {
      if(!fired) {
        if(event.code === key) {
          callback(event);
          fired = true;
        }
      }
    }

    document.addEventListener('keydown', handle);
    return () => document.removeEventListener('keydown', handle);
  }, [key]);

  // Key Up
  useEffect(() => {
    const handle = (event) => {
      if(fired) {
        if(event.code === key) {
          fired = false;
        }
      }
    }

    document.addEventListener('keyup', handle);
    return () => document.removeEventListener('keyup', handle);
  }, [key]);
}

const Stopwatch = ({ generateScramble }) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Detecting spacebar keypress
  useKey('Space', () => {
    setIsActive(state => {
      if(state) {
        generateScramble(20);
      } else {
        setTime(0);
      }

      return !state;
    });
  });

  // Handles adding time when the stopwatch is active
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
    </>
  );
}

export default Stopwatch;
