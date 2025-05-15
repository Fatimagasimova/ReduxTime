import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  tickDown,
  resetTime,
  addLap,
  toggleRunning,
  setTimeValue,
} from '../reduxfile/timerSlice';

const Timer = () => {
  const dispatch = useDispatch();
  const { hours, minutes, seconds, isRunning, laps } = useSelector(state => state.timer);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(tickDown());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, dispatch]);

  const format = (v) => String(v).padStart(2, '0');

  const handleInputChange = (label, e) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {  // yalnız rəqəm icazə verilir
      dispatch(setTimeValue({ label, value: val === '' ? 0 : Number(val) }));
    }
  };

  const createTimeSetter = (label, value) => (
    <div style={{ display: 'inline-block', margin: '0 10px', textAlign: 'center' }}>
      
      <input
  type="text"
  value={format(value)}
  onChange={(e) => handleInputChange(label, e)}
  placeholder={label === 'hours' ? 'Saat' : label === 'minutes' ? 'Dəqiqə' : 'Saniyə'}
  className='timeInput'
/>


      
      <button className='timebuttons' onClick={() => dispatch(increment(label))}>+</button>
      <button className='timebuttons' onClick={() => dispatch(decrement(label))}>−</button>
    </div>
  );

  return (
    <div className='tasktimer'>
      <div className='timeR'>
        {createTimeSetter('hours', hours)}
        {createTimeSetter('minutes', minutes)}
        {createTimeSetter('seconds', seconds)}
  
        <button className='redbuttons' onClick={() => dispatch(toggleRunning())}>
          {isRunning ? 'Dayandır' : 'Başlat'}
        </button>
        <button className='redbuttons' onClick={() => dispatch(resetTime())}>Yenidən</button>
        <button className='redbuttons' onClick={() => dispatch(addLap())}>Yadda saxla</button>
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

export default Timer;
