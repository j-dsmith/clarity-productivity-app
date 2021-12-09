import { DashContainer } from './dashboard.styles';
import { fetchContext } from '../../helpers/client';
import Calendar from './calendar';
import Tasks from './tasks';
import Forecast from './forecast';
import Stats from './stats';

const Dashboard = ({ weather }) => {
  const { user } = fetchContext('user');

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
      <DashContainer
        initial="closed"
        animate="open"
        exit="closed"
        variants={variants}
      >
        <Calendar />
        <Forecast weather={weather} />
        <Tasks />
        <Stats user={user} />
      </DashContainer>
    </>
  );
};

export default Dashboard;
