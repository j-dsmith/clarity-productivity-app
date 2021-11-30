import * as MdIcons from 'react-icons/md';
import { theme } from '../../pages/_app';

const { turquoise, bittersweet, naplesyellow, bluecrayola, lavender } =
  theme.colors;

export const data = [
  {
    title: 'Home',
    icon: <MdIcons.MdHome />,
    color: naplesyellow,
  },
  {
    title: 'Projects',
    icon: <MdIcons.MdFolder />,
    color: bluecrayola,
  },
  {
    title: 'Decks',
    icon: <MdIcons.MdNote />,
    color: lavender,
  },
  {
    title: 'Timer',
    icon: <MdIcons.MdAlarm />,
    color: turquoise,
  },
  {
    title: 'Trash',
    icon: <MdIcons.MdDelete />,
    color: bittersweet,
  },
];
