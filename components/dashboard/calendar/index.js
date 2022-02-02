// Dependencies
import { useState } from 'react';

// Style
import {
  CalendarGrid,
  CalendarContainer,
  CalendarHeader,
  CalendarBtn,
  WeekdayHeader,
} from './calendar.styles';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

// Helpers
import CalendarMonth, {
  renderPrevMonthDays,
  renderCurrentMonthDays,
  renderNextMonthDays,
} from './helpers';

const Calendar = () => {
  //get current month and year
  const [yearDisplayed, setYearDisplayed] = useState(new Date().getFullYear());
  const [monthDisplayed, setMonthDisplayed] = useState(new Date().getMonth());

  const calendarMonth = new CalendarMonth(yearDisplayed, monthDisplayed);

  const handleClick = (btnType) => {
    if (btnType === 'increment') {
      if (monthDisplayed === 11) {
        setMonthDisplayed(0);
        setYearDisplayed(yearDisplayed + 1);
      } else {
        setMonthDisplayed(monthDisplayed + 1);
      }
      // setMonthDisplayed(monthDisplayed + 1);
    } else {
      setMonthDisplayed(monthDisplayed - 1);
      if (monthDisplayed === 0) {
        setMonthDisplayed(11);
        setYearDisplayed(yearDisplayed - 1);
      }
    }
  };

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarBtn colStart="1" onClick={() => handleClick()} rotate="true">
          <MdArrowBack />
        </CalendarBtn>
        <h2>{`${calendarMonth.name} ${yearDisplayed}`}</h2>
        <CalendarBtn colStart="7" onClick={() => handleClick('increment')}>
          <MdArrowForward />
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
        {renderPrevMonthDays(calendarMonth, yearDisplayed, monthDisplayed)}
        {renderCurrentMonthDays(calendarMonth, yearDisplayed)}
        {renderNextMonthDays(calendarMonth)}
      </CalendarGrid>
    </CalendarContainer>
  );
};

export default Calendar;
