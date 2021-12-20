import { StyledFormBtn, StaticIcon } from './auth.styles';
import Loader from 'react-loader-spinner';

const FormBtn = ({ text, icon, textcolor, outline, isLoading, isDisabled }) => {
  //animation variants
  const btn = {
    hover: {
      transition: { duration: 0.5, type: 'spring' },
      scale: 1.06,
      boxShadow:
        'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    },
  };

  const renderIcon = () => {
    if (isLoading) {
      return (
        <StaticIcon>
          <Loader type="Oval" color="#fff" height={15} width={15} />
        </StaticIcon>
      );
    }

    return <StaticIcon>{icon}</StaticIcon>;
  };

  return (
    <StyledFormBtn
      variants={btn}
      initial="rest"
      whileHover="hover"
      textcolor={textcolor}
      outline={outline}
      disabled={isDisabled}
    >
      {text}
      {renderIcon()}
    </StyledFormBtn>
  );
};

export default FormBtn;
