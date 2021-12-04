import { StyledDashContainer } from './dashboard.styles';
import Calendar from './calendar';
import Tasks from './tasks';
import Forecast from './forecast';
import Stats from './stats';

const Dashboard = () => {
  const variants = {
    closed: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.1 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1 },
    },
  };
  return (
    <>
      <StyledDashContainer
        initial="closed"
        animate="open"
        exit="closed"
        variants={variants}
      >
        <Calendar />
        <Stats />
      </StyledDashContainer>

      <StyledDashContainer
        initial="closed"
        animate="open"
        exit="closed"
        variants={variants}
      >
        <Tasks />
        <Forecast />
      </StyledDashContainer>
    </>
  );
};

export default Dashboard;
