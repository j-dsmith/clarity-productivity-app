import { MdHome, MdFolder, MdNote, MdAlarm, MdDelete } from 'react-icons/md';

const colors = {
  turquoise: 'hsl(176, 56%, 55%)',
  cultured: 'hsl(20, 33%, 98%)',
  bittersweet: 'hsl(0, 100%, 71%)',
  naplesyellow: 'hsl(50, 100%, 71%)',
  bluecrayola: 'hsl(222, 100%, 61%)',
  discord: 'hsl(227, 58%, 65%)',
};

export const data = [
  {
    title: 'home',
    href: '/',
    icon: <MdHome />,
    color: colors.naplesyellow,
  },
  {
    title: 'projects',
    href: '/projects',
    icon: <MdFolder />,
    color: colors.bluecrayola,
  },
  {
    title: 'decks',
    href: '/study',
    icon: <MdNote />,
    color: colors.turquoise,
  },
  {
    title: 'timer',
    href: '/study/timer',
    icon: <MdAlarm />,
    color: colors.discord,
  },
  {
    title: 'trash',
    href: '/trash',
    icon: <MdDelete />,
    color: colors.bittersweet,
  },
];
