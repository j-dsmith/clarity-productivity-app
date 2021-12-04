import { StyledStatTile } from './stats.styles';

const StatTile = ({ title, content, color, gridArea }) => {
  return (
    <StyledStatTile color={color} gridarea={gridArea}>
      <p>{title}</p>
      <h4>{content}</h4>
    </StyledStatTile>
  );
};

export default StatTile;
