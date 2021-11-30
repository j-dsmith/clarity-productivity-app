import { MdHome, MdFolder, MdNote, MdAlarm, MdDelete } from 'react-icons/md';
import { theme } from '../../pages/_app';

const { turquoise, bittersweet, naplesyellow, bluecrayola, lavender } =
  theme.colors;

export const data = [
  {
    title: 'Home',
    icon: <MdHome />,
    color: naplesyellow,
  },
  {
    title: 'Projects',
    icon: <MdFolder />,
    color: bluecrayola,
  },
  {
    title: 'Decks',
    icon: <MdNote />,
    color: lavender,
  },
  {
    title: 'Timer',
    icon: <MdAlarm />,
    color: turquoise,
  },
  {
    title: 'Trash',
    icon: <MdDelete />,
    color: bittersweet,
  },
];
