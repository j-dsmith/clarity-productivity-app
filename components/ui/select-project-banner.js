// Style

import { BannerContainer } from './ui-items.styles';

const SelectProjectBanner = () => {
  return (
    <BannerContainer
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 2, duration: 0.2 } }}
    >
      <p id="banner-content">
        Select a <span>Project</span> to get started
      </p>
    </BannerContainer>
  );
};

export default SelectProjectBanner;
