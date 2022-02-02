// Style
import { CalendarDay, ExtraDay } from './calendar.styles';

export const renderPrevMonthDays = (
  calendarMonth,
  currentYear,
  currentMonth
) => {
  const prevMonthDays = [];
  // Return numberic length of prior month
  const prevMonthLength = new Date(currentYear, currentMonth, 0).getDate();

  for (
    let i = prevMonthLength;
    i > prevMonthLength - calendarMonth.extraDays.leading;
    i--
  ) {
    prevMonthDays.push(i);
  }

  prevMonthDays.reverse();

  return prevMonthDays.map((day) => (
    <ExtraDay key={'prev-' + day}>{day}</ExtraDay>
  ));
};

export const renderCurrentMonthDays = (calendarMonth, yearDisplayed) => {
  const currentMonthDays = [];
  const today = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const { numDays, monthIdx, firstOfMonth } = calendarMonth;

  // Add current month days to array
  for (let i = 1; i <= numDays; i++) {
    currentMonthDays.push(i);
  }

  // Using dates(days) in array - render dates
  return currentMonthDays.map((day) => {
    const isToday =
      today === day &&
      monthIdx === currentMonth &&
      currentYear === yearDisplayed
        ? 'today'
        : '';

    if (day === 1) {
      return (
        <CalendarDay key={day} firstDay={firstOfMonth} className={isToday}>
          {day}
        </CalendarDay>
      );
    }
    return (
      <CalendarDay key={'current-' + day} className={isToday}>
        {day}
      </CalendarDay>
    );
  });
};

export const renderNextMonthDays = (calendarMonth) => {
  const nextMonthDays = [];
  for (let i = 1; i <= calendarMonth.extraDays.trailing; i++) {
    nextMonthDays.push(i);
  }

  return nextMonthDays.map((day) => (
    <ExtraDay key={'prev-' + day}>{day}</ExtraDay>
  ));
};

function getExtraDays(firstDay, numDays) {
  //* Days Based on 42-cell Calendar Grid
  const extraDays = {
    total: 42 - numDays,
    leading: 0,
    trailing: 0,
  };

  switch (firstDay) {
    case 'mon':
      extraDays.leading = 0;
      break;
    case 'tue':
      extraDays.leading = 1;
      break;
    case 'wed':
      extraDays.leading = 2;
      break;
    case 'thu':
      extraDays.leading = 3;
      break;
    case 'fri':
      extraDays.leading = 4;
      break;
    case 'sat':
      extraDays.leading = 5;
      break;
    case 'sun':
      extraDays.leading = 6;
      break;
  }
  extraDays.trailing = extraDays.total - extraDays.leading;

  return extraDays;
}

export default class CalendarMonth {
  constructor(year, month) {
    // Get long-form name of current month from passed in Date() object
    this.name = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
      new Date(year, month)
    );

    this.monthIdx = new Date(year, month).getMonth();
    this.currentYear = new Date().getFullYear();

    // Calculate number of days for current month
    this.numDays = new Date(year, month + 1, 0).getDate();

    // Get first day of the month
    this.firstOfMonth = String(new Date(year, month, 1))
      .toLowerCase()
      .split(' ')[0];

    // Get extra days
    this.extraDays = getExtraDays(this.firstOfMonth, this.numDays);
  }
}
