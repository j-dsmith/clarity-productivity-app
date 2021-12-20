import {
  StyledFormBtn,
  StyledStaticIcon,
  StyledDynamicIcon,
} from './auth.styles';
import { SpinnerContainer } from '../ui/ui-items.styles';
import Loader from 'react-loader-spinner';
import { signIn } from 'next-auth/react';

const FormBtn = ({
  text,
  icon,
  iconType,
  textcolor,
  outline,
  isLoading,
  isDisabled,

  provider,
}) => {
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
      transition: { duration: 0 },
      x: -10,
    },
    hover: {
      opacity: 1,
      transition: { duration: 0.1 },
      x: 0,
    },
    static: { opacity: 1 },
  };

  const renderIcon = () => {
    if (isLoading) {
      return (
        <StyledStaticIcon>
          <Loader type="Oval" color="#fff" height={15} width={15} />
        </StyledStaticIcon>
      );
    }

    if (!isLoading && iconType !== 'provider') {
      return (
        <StyledDynamicIcon variants={iconVariant}>{icon}</StyledDynamicIcon>
      );
    }

    return <StyledStaticIcon>{icon}</StyledStaticIcon>;
  };

  return (
    <StyledFormBtn
      variants={btn}
      initial="rest"
      whileHover="hover"
      textcolor={textcolor}
      outline={outline}
      disabled={isDisabled}
      onClick={() => signIn(provider)}
    >
      {text}
      {renderIcon()}
    </StyledFormBtn>
  );
};

export default FormBtn;
