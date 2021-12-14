import { MdArrowBack } from 'react-icons/md';
import { BannerContainer, ArrowContainer } from './ui-items.styles';

const SelectProjectBanner = () => {
  return (
    <BannerContainer
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
    >
      <ArrowContainer
        initial={{ x: 0 }}
        animate={{
          x: -5,
          transition: { yoyo: Infinity, duration: 0.5 },
        }}
      >
        <MdArrowBack />
      </ArrowContainer>
      <p>
        Select a <span>Project</span> to get started
      </p>
    </BannerContainer>
  );
};

export default SelectProjectBanner;
