import {
  StyledStatsContainer,
  StyledTileGroup,
  StyledStatsHeader,
} from './stats.styles';
import StatTile from './stat-tile';

const Stats = () => {
  //TODO: render stat tiles
  // total projects, total notes, pomodoros completed, accuracy of most recently studied flashcards

  return (
    <StyledStatsContainer>
      <StyledStatsHeader>
        <h3>Stats</h3>
      </StyledStatsHeader>

      <StatTile
        title="Study Decks"
        content={15}
        gridArea="decks"
        color="hsl(227, 58%, 65%)"
      />
      <StatTile
        title="Total Projects"
        content={4}
        gridArea="tproj"
        color="hsl(222, 100%, 61%)"
      />

      <StatTile
        title="Pomodoros"
        content={23}
        gridArea="pom"
        color="hsl(176, 56%, 55%)"
      />
      <StatTile
        title="Completed Tasks"
        content={9}
        gridArea="ctasks"
        color="hsl(50, 100%, 71%)"
      />
    </StyledStatsContainer>
  );
};

export default Stats;
