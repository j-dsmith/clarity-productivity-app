// Style
import { StatsContainer, StatsHeader, TileContainer } from './stats.styles';
import { SpinnerContainer } from '../../ui/ui-items.styles';

// Helpers
import { fetchContext } from '../../../helpers/client';

// Components
import StatTile from './stat-tile';
import Loader from 'react-loader-spinner';

const Stats = () => {
  // Get user from context
  const { user } = fetchContext('user');

  // Check if user is empty object or if loaded successfully
  if (Object.keys(user).length === 0) {
    return (
      <StatsContainer>
        <StatsHeader>
          <h2>Stats</h2>
        </StatsHeader>

        <SpinnerContainer>
          <Loader
            type="Oval"
            color="hsl(212, 13%, 48%)"
            height={75}
            width={75}
          />
        </SpinnerContainer>
      </StatsContainer>
    );
  }

  // Get properties from user for displaying stats
  const { decks, projects, pomodorosCompleted, tasksCompleted } = user;
  const numProjects = projects.length;
  const numDecks = decks.length;

  return (
    <StatsContainer>
      <StatsHeader>
        <h2>Stats</h2>
      </StatsHeader>

      <TileContainer>
        <StatTile
          title="Study Decks"
          content={numDecks}
          color="hsl(176, 56%, 55%)"
        />
        <StatTile
          title="Total Projects"
          content={numProjects}
          color="hsl(222, 100%, 61%)"
        />

        <StatTile
          title="Pomodoros"
          content={pomodorosCompleted}
          color="hsl(227, 58%, 65%)"
        />
        <StatTile
          title="Completed Tasks"
          content={tasksCompleted}
          color="hsl(50, 100%, 71%)"
        />
      </TileContainer>
    </StatsContainer>
  );
};

export default Stats;
