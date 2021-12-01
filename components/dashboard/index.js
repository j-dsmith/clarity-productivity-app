import Tasks from './tasks';
import { StyledDashContainer } from './dashboard.styles';
import Forecast from './forecast';

const Dashboard = () => {
  return (
    <>
      <StyledDashContainer></StyledDashContainer>

      <StyledDashContainer>
        <Tasks />
        <Forecast />
      </StyledDashContainer>
    </>
  );
};

export default Dashboard;
