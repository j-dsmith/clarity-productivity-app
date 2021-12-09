import { useContext } from 'react';
import {
  StyledStatsContainer,
  StyledStatsHeader,
  TileContainer,
} from './stats.styles';
import StatTile from './stat-tile';
import UserContext from '../../../store/user-ctx';

const Stats = () => {
  const { user } = useContext(UserContext);
  const { decks, projects, pomodorosCompleted, tasksCompleted } = user;

  const numProjects = projects === undefined ? 0 : projects.length;
  const numDecks = decks === undefined ? 0 : decks.length;

  //TODO: render loading spinner if no user
  if (!user) return <div />;

  return (
    <StyledStatsContainer>
      <StyledStatsHeader>
        <h2>Stats</h2>
      </StyledStatsHeader>

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
    </StyledStatsContainer>
  );
};

export default Stats;
