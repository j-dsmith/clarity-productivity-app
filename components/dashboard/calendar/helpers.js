import {
  CalendarDay,
  StyledCurrentDay,
  StyledExtraDay,
} from './calendar.styles';

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
    <StyledExtraDay key={'prev-' + day}>{day}</StyledExtraDay>
  ));
};

export const renderCurrentMonthDays = (calendarMonth) => {
  const currentMonthDays = [];

  // Add current month days to array
  for (let i = 1; i <= calendarMonth.numDays; i++) {
    currentMonthDays.push(i);
  }

  // Using dates(days) in array - render dates
  return currentMonthDays.map((day) => {
    //TODO: Fix so that todays date gets highlighted
    // if (day === new Date()) {
    //   return <StyledCurrentDay key={'current-' + day}>{day}</StyledCurrentDay>;
    // }
    if (day === 1) {
      return (
        <CalendarDay key={day} firstDay={calendarMonth.firstOfMonth}>
          {day}
        </CalendarDay>
      );
    }
    return <CalendarDay key={'current-' + day}>{day}</CalendarDay>;
  });
};

export const renderNextMonthDays = (calendarMonth) => {
  const nextMonthDays = [];
  for (let i = 1; i <= calendarMonth.extraDays.trailing; i++) {
    nextMonthDays.push(i);
  }

  return nextMonthDays.map((day) => (
    <StyledExtraDay key={'prev-' + day}>{day}</StyledExtraDay>
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
