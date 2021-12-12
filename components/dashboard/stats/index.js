import { StatsContainer, StatsHeader, TileContainer } from './stats.styles';
import StatTile from './stat-tile';

const Stats = ({ user }) => {
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
