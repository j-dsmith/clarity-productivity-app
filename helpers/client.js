// Dependencies
import { useContext } from 'react';
import AnimationContext from '../store/animation-ctx';
import UserContext from '../store/user-ctx';
import axios from 'axios';

// //* Fetch animation context
export const fetchContext = (contextType) => {
  if (contextType === 'animation') {
    const animationCtx = useContext(AnimationContext);
    return {
      ...animationCtx,
    };
  }
  if (contextType === 'user') {
    const userCtx = useContext(UserContext);
    return { ...userCtx };
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

//? Fetcher for SWR method
export const fetchData = async (url) => {
  const response = await axios.get(url);

  return response.data;
};
