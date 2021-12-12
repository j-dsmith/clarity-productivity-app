import { useState } from 'react';
import {
  CalendarGrid,
  CalendarContainer,
  CalendarHeader,
  CalendarBtn,
  WeekdayHeader,
} from './calendar.styles';
import { MdArrowForwardIos } from 'react-icons/md';
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
    <CalendarContainer>
      <CalendarHeader>
        <CalendarBtn colStart="1" onClick={() => handleClick()} rotate="true">
          <MdArrowForwardIos />
        </CalendarBtn>
        <h3>{`${calendarMonth.name} ${currentYear}`}</h3>
        <CalendarBtn colStart="7" onClick={() => handleClick('increment')}>
          <MdArrowForwardIos />
        </CalendarBtn>
      </CalendarHeader>
      <CalendarGrid>
        <WeekdayHeader>Mo</WeekdayHeader>
        <WeekdayHeader>Tu</WeekdayHeader>
        <WeekdayHeader>We</WeekdayHeader>
        <WeekdayHeader>Th</WeekdayHeader>
        <WeekdayHeader>Fr</WeekdayHeader>
        <WeekdayHeader>Sa</WeekdayHeader>
        <WeekdayHeader>Su</WeekdayHeader>
        {renderPrevMonthDays(calendarMonth, currentYear, currentMonth)}
        {renderCurrentMonthDays(calendarMonth)}
        {renderNextMonthDays(calendarMonth)}
      </CalendarGrid>
    </CalendarContainer>
  );
};

export default Calendar;
