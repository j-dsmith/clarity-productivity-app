// Style
import { DurationControlContainer, ControlBtn } from './pomodoro.styles';
import { CgMathPlus, CgMathMinus } from 'react-icons/cg';

// Helpers
import { incrementValue, decrementValue } from './helpers';

function DurationControl({ title, durationValue, state, dispatch, timerType }) {
  function handleIncrement() {
    if (state.timerActive) {
      return;
    }
    incrementValue(state, dispatch, timerType);
  }

  function handleDecrement() {
    if (state.timerActive) {
      return;
    }
    decrementValue(state, dispatch, timerType);
  }

  return (
    <DurationControlContainer>
      <h4>{title}</h4>
      <div>
        <div id="increment-btn-group">
          <ControlBtn
            style={{ '--size': '3.5rem' }}
            className={`${
              state.timerActive || durationValue === 1 ? 'disabled' : ''
            } increment-decrement`}
            disabled={state.timerActive ? true : false}
          >
            <CgMathMinus
              onClick={handleDecrement}
              style={{ '--svg-size': '1.75rem' }}
            />
          </ControlBtn>
          <p
            id="timer-duration"
            className={`${state.timerActive ? 'disabled' : ''}`}
          >
            {durationValue}
          </p>
          <ControlBtn
            style={{ '--size': '3.5rem' }}
            className={`${
              state.timerActive ? 'disabled' : ''
            } increment-decrement`}
            disabled={state.timerActive ? true : false}
          >
            <CgMathPlus
              onClick={handleIncrement}
              style={{ '--svg-size': '1.75rem' }}
            />
          </ControlBtn>
        </div>
      </div>
    </DurationControlContainer>
  );
}

export default DurationControl;
