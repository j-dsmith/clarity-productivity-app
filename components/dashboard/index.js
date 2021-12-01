import { StyledDashContainer } from './dashboard.styles';
import Calendar from './calendar';
import Tasks from './tasks';
import Forecast from './forecast';

const Dashboard = () => {
  return (
    <>
      <StyledDashContainer>
        <Calendar />
        <Tasks />
      </StyledDashContainer>

      <StyledDashContainer>
        <Tasks />
        <Forecast />
      </StyledDashContainer>
    </>
  );
};

export default Dashboard;
