import React from 'react';

const TimerSelector = ({ onSelectTimer }) => {
  return (
    <div>
      <h2>Select a Timer:</h2>
      <button onClick={() => onSelectTimer(15)}>15 seconds</button>
      <button onClick={() => onSelectTimer(30)}>30 seconds</button>
      <button onClick={() => onSelectTimer(60)}>60 seconds</button>
    </div>
  );
};

export default TimerSelector;