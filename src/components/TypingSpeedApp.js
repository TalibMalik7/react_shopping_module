import React, { useState, useEffect } from 'react';
import TimerSelector from './TimerSelector';

const TypingSpeedApp = () => {
  const [text, setText] = useState('This is a simple typing speed test.');
  const [userInput, setUserInput] = useState('');
  const [timer, setTimer] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [wpm, setWpm] = useState(0);

  useEffect(() => {
    if (startTime) {
      const interval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        setTimeElapsed(elapsed);
        setWpm(Math.floor((userInput.length / 5) / (elapsed / 60)));
        
        if (elapsed >= timer) {
          setStartTime(null);
          setUserInput('');
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [startTime, userInput, timer]);

  const handleInputChange = (event) => {
    if (!startTime) {
      setStartTime(Date.now());
    }
    setUserInput(event.target.value);

    if (event.target.value === text) {
      setStartTime(null);
      setUserInput('');
    }
  };

  const handleSelectTimer = (selectedTimer) => {
    setTimer(selectedTimer);
    setStartTime(null);
    setTimeElapsed(0);
    setWpm(0);
  };

  return (
    <div>
      <h1>Typing Speed Test</h1>
      <TimerSelector onSelectTimer={handleSelectTimer} />
      <p>{text}</p>
      <textarea
        value={userInput}
        onChange={handleInputChange}
        placeholder="Start typing here..."
        disabled={timeElapsed >= timer}
      />
      <p>Time Elapsed: {timeElapsed} seconds</p>
      <p>Typing Speed: {wpm} WPM (Words Per Minute)</p>
    </div>
  );
};

export default TypingSpeedApp;
