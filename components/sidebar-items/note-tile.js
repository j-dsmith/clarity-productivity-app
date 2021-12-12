import Link from 'next/link';
import {
  NoteTileContainer,
  TileFooter,
  TileHeader,
} from './sidebar-items.styles';

const NoteTile = ({ title, id, createdAt, content }) => {
  return (
    // <Link>
    <NoteTileContainer>
      <TileHeader>
        <h3>{title}</h3>
      </TileHeader>
      <TileFooter>
        {/* <Date>
          Created: <span>{createdAt}</span>
        </Date> */}
      </TileFooter>
    </NoteTileContainer>
    // </Link>
  );
};

export default NoteTile;
