// Style
import { DashContainer } from './dashboard.styles';

// Components
import Calendar from './calendar';
import Tasks from './tasks';
import Forecast from './forecast';
import Stats from './stats';

const Dashboard = ({ weather }) => {
  const variants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };
  return (
    <>
      <DashContainer
        initial="closed"
        animate="open"
        exit="closed"
        variants={variants}
      >
        <Calendar />
        <Forecast weather={weather} />
        <Tasks />
        <Stats />
      </DashContainer>
    </>
  );
};

export default Dashboard;
