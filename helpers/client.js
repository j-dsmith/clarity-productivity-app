import { useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import AnimationContext from '../store/animation-ctx';
import UserContext from '../store/user-ctx';

//* Fetch animation context
export const fetchContext = (contextType) => {
  if (contextType === 'animation') {
    const animationCtx = useContext(AnimationContext);
    return {
      trayOpenState: animationCtx.trayOpenState,
      toggleTrayOpenState: animationCtx.toggleTrayOpenState,
    };
  }
};

export const fetchWeather = async () => {
  const response = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=auto&days=2&aqi=no&alerts=no`
  );
  return response;
};

export const refreshData = (router) => {
  router.replace(router.asPath);
};
