import { MdHome, MdFolder, MdNote, MdAlarm, MdDelete } from 'react-icons/md';

const colors = {
  turquoise: 'hsl(176, 56%, 55%)',
  cultured: 'hsl(20, 33%, 98%)',
  bittersweet: 'hsl(0, 100%, 71%)',
  naplesyellow: 'hsl(50, 100%, 71%)',
  bluecrayola: 'hsl(222, 100%, 61%)',
  lavender: 'hsl(267, 72%, 82%)',
};

export const data = [
  {
    title: 'Home',
    icon: <MdHome />,
    color: colors.naplesyellow,
  },
  {
    title: 'Projects',
    icon: <MdFolder />,
    color: colors.bluecrayola,
  },
  {
    title: 'Decks',
    icon: <MdNote />,
    color: colors.lavender,
  },
  {
    title: 'Timer',
    icon: <MdAlarm />,
    color: colors.turquoise,
  },
  {
    title: 'Trash',
    icon: <MdDelete />,
    color: colors.bittersweet,
  },
];
