import { useState } from 'react';
import { StyledCalendarContainer, StyledCalendarBtn } from './calendar.styles';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import CalendarMonth, {
  renderPrevMonthDays,
  renderCurrentMonthDays,
  renderNextMonthDays,
} from './helpers';

const Calendar = () => {
  //get current month and year
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const calendarMonth = new CalendarMonth(currentYear, currentMonth);

  const handleClick = (btnType) => {
    if (btnType === 'increment') {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
      // setCurrentMonth(currentMonth + 1);
    } else {
      setCurrentMonth(currentMonth - 1);
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      }
    }
  };

  return (
    <StyledCalendarContainer>
      <StyledCalendarBtn colStart="1" onClick={() => handleClick()}>
        <MdArrowBackIos />
      </StyledCalendarBtn>
      <h3>{`${calendarMonth.name} ${currentYear}`}</h3>
      <StyledCalendarBtn colStart="7" onClick={() => handleClick('increment')}>
        <MdArrowForwardIos />
      </StyledCalendarBtn>
      <p>Mo</p>
      <p>Tu</p>
      <p>We</p>
      <p>Th</p>
      <p>Fr</p>
      <p>Sa</p>
      <p>Su</p>
      {renderPrevMonthDays(calendarMonth, currentYear, currentMonth)}
      {renderCurrentMonthDays(calendarMonth)}
      {renderNextMonthDays(calendarMonth)}
    </StyledCalendarContainer>
  );
};

export default Calendar;
