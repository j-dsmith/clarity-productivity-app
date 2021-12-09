import { StyledStatTile } from './stats.styles';

const StatTile = ({ title, content, color }) => {
  return (
    <StyledStatTile color={color}>
      <p>{title}</p>
      <h4>{content}</h4>
    </StyledStatTile>
  );
};

export default StatTile;
