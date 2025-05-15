import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (v) => String(v).padStart(2, '0');

  const hours = format(time.getHours());
  const minutes = format(time.getMinutes());
  const seconds = format(time.getSeconds());

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className='clock'>{`${hours} ${minutes} ${seconds}`}</h1>
    </div>
  );
};

export default Clock;
