import { useState, useEffect, useRef } from 'react';

const useKey = (key, callback) => {
  const [fired, setFired] = useState(false);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, []);

  // Key Down
  useEffect(() => {
    const handle = (event) => {
      if (!fired) {
        if (event.code === key) {
          callback(event);
          setFired(true);
        }
      }
    }

    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [key]);

  // Key Up
  useEffect(() => {
    const handle = (event) => {
      if (fired) {
        if (event.code === key) {
          setFired(false);
        }
      }
    }

    window.addEventListener('keyup', handle);
    return () => window.removeEventListener('keyup', handle);
  }, [key]);
}

export {
  useKey
} 
  
