import {
  StyledFormBtn,
  StyledStaticIcon,
  StyledDynamicIcon,
} from './auth.styles';

const FormBtn = ({ text, icon, iconType, textcolor, outline }) => {
  //animation variants
  const btn = {
    hover: {
      transition: { duration: 0.5, type: 'spring' },
      scale: 1.06,
      boxShadow:
        'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    },
  };

  const iconVariant = {
    rest: {
      opacity: 0,
      transition: { duration: 0.1 },
      x: -5,
    },
    hover: {
      opacity: 1,
      transition: { duration: 0.1 },
      x: 0,
    },
    static: { opacity: 1 },
  };

  return (
    <StyledFormBtn
      variants={btn}
      initial="rest"
      whileHover="hover"
      textcolor={textcolor}
      outline={outline}
    >
      {text}
      {iconType !== 'provider' ? (
        <StyledDynamicIcon variants={iconVariant}>{icon}</StyledDynamicIcon>
      ) : (
        <StyledStaticIcon>{icon}</StyledStaticIcon>
      )}
    </StyledFormBtn>
  );
};

export default FormBtn;
