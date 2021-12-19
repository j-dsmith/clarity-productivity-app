import { useState } from 'react';

const Pomodoro = () => {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [timer, setTimer] = useState(null);

  const start = () => {
    const timer = setInterval(() => {
      setSecondsLeft((secondsLeft) => secondsLeft - 1);
      if (secondsLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);

    setTimer(timer);
  };

  const formatTimerDisplay = () => {
    const displayMinutes = Math.floor(secondsLeft / 60);
    let displaySeconds;

    if (secondsLeft % 60 === 0) {
      displaySeconds = '00';
    } else if (secondsLeft % 60 < 10) {
      displaySeconds = `0${secondsLeft % 60}`;
    } else {
      displaySeconds = secondsLeft % 60;
    }

    return { displaySeconds, displayMinutes };
  };

  const { displayMinutes, displaySeconds } = formatTimerDisplay();
  return (
    <div>
      time left: {displayMinutes}:{displaySeconds}
      <div>
        <button onClick={start}>start</button>
        <button onClick={() => clearInterval(timer)}>Stop</button>
      </div>
    </div>
  );
};

export default Pomodoro;
