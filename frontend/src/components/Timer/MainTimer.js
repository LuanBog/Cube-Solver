import React, { useState, useEffect, useRef } from 'react';
import { useKey } from '../../custom_hooks/useKey';
import InspectionTime from './InspectionTime';
import Stopwatch from './Stopwatch';

const MainTimer = ({ generateScramble }) => {
  // Inspection Time
  const [inspectionTime, setInspectionTime] = useState(15); 
  const [inspectionActive, setInspectionActive] = useState(false);

  // Stopwatch Time
  const [stopWatchTime, setStopWatchTime] = useState(0); 
  const [stopWatchActive, setStopWatchActive] = useState(false);

  const hiddenButton = useRef();

  useKey('Space', () => {
    hiddenButton.current.click();
  });

  // Resets the scramble and resets the timer
  useEffect(() => {
    stopWatchActive ? setStopWatchTime(0) : generateScramble(20);
  }, [stopWatchActive]);
  
  const spaceClicked = () => {
    if(!inspectionActive && !stopWatchActive) {
      setInspectionActive(true);
      setStopWatchActive(false);
    } 
    else if(inspectionActive && !stopWatchActive) {
      setInspectionActive(false);
      setStopWatchActive(true);
    }
    else if(!inspectionActive && stopWatchActive) {
      setInspectionActive(false);
      setStopWatchActive(false);
      setInspectionTime(15);
    }
  }

  return (
    <>
      {
        inspectionActive ? 
        <InspectionTime inspectionTime={inspectionTime} setInspectionTime={setInspectionTime} inspectionActive={inspectionActive} setInspectionActive={setInspectionActive} /> :
        <Stopwatch stopWatchTime={stopWatchTime} setStopWatchTime={setStopWatchTime} stopWatchActive={stopWatchActive} setStopWatchActive={setStopWatchActive} generateScramble={generateScramble} />
      } 

      <button onClick={spaceClicked} ref={hiddenButton} id='hidden-btn'>Hello there!</button>
    </>
  );
}

export default MainTimer;
