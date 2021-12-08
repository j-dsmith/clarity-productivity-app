import { useContext } from 'react';
import { StyledStatsContainer, StyledStatsHeader } from './stats.styles';
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
        <h3>Stats</h3>
      </StyledStatsHeader>

      <>
        <StatTile
          title="Study Decks"
          gridArea="decks"
          content={numDecks}
          color="hsl(176, 56%, 55%)"
        />
        <StatTile
          title="Total Projects"
          gridArea="tproj"
          content={numProjects}
          color="hsl(222, 100%, 61%)"
        />

        <StatTile
          title="Pomodoros"
          gridArea="pom"
          content={pomodorosCompleted}
          color="hsl(227, 58%, 65%)"
        />
        <StatTile
          title="Completed Tasks"
          content={tasksCompleted}
          gridArea="ctasks"
          color="hsl(50, 100%, 71%)"
        />
      </>
    </StyledStatsContainer>
  );
};

export default Stats;
