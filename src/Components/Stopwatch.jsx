import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  start,
  pause,
  tick,
  resetTime,
  addLap,
} from '../reduxfile/stopwatchSlice';

const Stopwatch = () => {
  const dispatch = useDispatch();
  const { hours, minutes, seconds, isRunning, laps } = useSelector((state) => state.stopwatch);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, dispatch]);

  const formatTime = (val) => String(val).padStart(2, '0');

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '63px' }}>
        {formatTime(hours)} saat {formatTime(minutes)} dəqiqə {formatTime(seconds)} saniyə
      </h1>
      <div className='buttons' style={{ margin: '10px' }}>
        <button onClick={() => dispatch(start())} disabled={isRunning}>Start</button>
        <button onClick={() => dispatch(pause())} disabled={!isRunning}>Pause</button>
        <button onClick={() => dispatch(resetTime())}>Reset</button>
        <button onClick={() => dispatch(addLap())} disabled={!isRunning}>∘</button>
      </div>

      <div className='lap-part'>
        <h3 className='laps'>Dövrlər</h3>
        <hr />
        <ul>
          {laps.map((lap, idx) => (
            <li key={idx}>{lap}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stopwatch;
