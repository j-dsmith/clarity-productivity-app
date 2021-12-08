import { useContext, useEffect } from 'react';
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
  if (contextType === 'user') {
    const userCtx = useContext(UserContext);
    return { user: userCtx.user, setUser: userCtx.setUser };
  }
};

export const fetchWeather = async () => {
  //TODO: Fix location to auto for IP based weather
  const response = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=auto&days=2&aqi=no&alerts=no`
  );
  return response;
};
