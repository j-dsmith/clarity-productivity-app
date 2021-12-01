import { useState } from 'react';
import {
  StyledCalendarContainer,
  StyledCalendarDay,
  StyledFirstDay,
  StyledCalendarBtn,
} from './calendar.styles';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const Calendar = () => {
  //get current month and year
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  //calc leading and trailing months conditionally for current month?
  const months = [
    { name: 'January', numDays: 31 },
    { name: 'February', numDays: 28 },
    { name: 'March', numDays: 31 },
    { name: 'April', numDays: 30 },
    { name: 'May', numDays: 31 },
    { name: 'June', numDays: 31 },
    { name: 'July', numDays: 31 },
    { name: 'August', numDays: 31 },
    { name: 'September', numDays: 30 },
    { name: 'October', numDays: 31 },
    { name: 'November', numDays: 30 },
    { name: 'December', numDays: 31 },
  ];

  const firstDayOfMonth = String(new Date(currentYear, currentMonth, 1))
    .toLowerCase()
    .split(' ')[0];

  // const extraDays = [
  //   {
  //     name: 'mon',
  //     leadingDays: 0,
  //     trailingDays: 12,
  //   },
  //   { name: 'tue', leadingDays: 1, trailingDays: 11 },
  //   { name: 'wed', leadingDays: 2, trailingDays: 10 },
  //   { name: 'thu', leadingDays: 3, trailingDays: 9 },
  //   { name: 'fri', leadingDays: 4, trailingDays: 8 },
  //   { name: 'sat', leadingDays: 5, trailingDays: 7 },
  //   { name: 'sun', leadingDays: 6, trailingDays: 6 },
  // ];

  const renderDays = () => {
    const daysInMonth = months[currentMonth].numDays;
    const calendarDays = [];

    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(i);
    }

    //TODO: finish adding in logic for leading and trailing days
    // const currentExtraDay = extraDays.filter(
    //   (day, index) => day.name === firstDayOfMonth
    // )[0];

    // for (let i = 1; i < currentExtraDay.leadingDays; i++) {
    //   calendarDays.unshift(i);
    // }
    // for (let i = 2; i < currentExtraDay.trailingDays; i++) {
    //   calendarDays.push(i);
    // }

    // Using dates(days) in array - render dates
    return calendarDays.map((day) => {
      if (day === 1) {
        return (
          <StyledFirstDay key={day} firstDay={firstDayOfMonth}>
            {day}
          </StyledFirstDay>
        );
      }
      return <StyledCalendarDay key={day}>{day}</StyledCalendarDay>;
    });
  };

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
      <h3>{`${months[currentMonth].name} ${currentYear}`}</h3>
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
      {renderDays()}
    </StyledCalendarContainer>
  );
};

export default Calendar;
