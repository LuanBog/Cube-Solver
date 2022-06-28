import React, { useEffect } from 'react'; 

const InspectionTime = ({ inspectionTime, setInspectionTime, inspectionActive, setInspectionActive }) => {
  useEffect(() => {
    let interval = null;

    if(inspectionTime <= 0) {
      setInspectionActive(false);
    }

    if(inspectionTime === 8)
      console.log('8 seconds!');
    else if(inspectionTime === 2)
      console.log('12 seconds!');
    else if(inspectionTime <= 0)
      setInspectionActive(false);

    if(inspectionActive) {
      interval = setInterval(() => {
        setInspectionTime(inspectionTime => inspectionTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    }
  }, [inspectionActive, inspectionTime]);

  return (
    <>
      <div className="inspection">
        {inspectionTime}  
      </div>    
    </>
  );
}

export default InspectionTime;
