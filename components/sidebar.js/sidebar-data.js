// Style
import { MdHome, MdFolder, MdNote, MdAlarm, MdDelete } from 'react-icons/md';

export const data = [
  {
    title: 'home',
    href: '/',
    icon: <MdHome />,
  },
  {
    title: 'projects',
    href: '/projects',
    icon: <MdFolder />,
  },
  {
    title: 'decks',
    href: '/study',
    icon: <MdNote />,
  },
  {
    title: 'timer',
    href: '/timer',
    icon: <MdAlarm />,
  },
  {
    title: 'trash',
    href: '/trash',
    icon: <MdDelete />,
  },
];
