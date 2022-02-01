import { useState } from 'react';

function useGeolocation() {
  const [geolocation, setGeolocation] = useState({});
  navigator.geolocation.getCurrentPosition((pos) => setGeolocation(pos.coords));

  return geolocation;
}

function Forecast() {
  return <div></div>;
}

export default index;
