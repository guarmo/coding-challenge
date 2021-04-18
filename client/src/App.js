import { useEffect } from "react";
import "./App.css";
import "./tailwind.output.css";
import { Provider } from "react-redux";
import store from "./store";

import Map from "./ components/Map";
import Input from "./ components/Input";

import { getData, setLoading } from "./actions/data";

const setLoadingAndFetch = async () => {
  store.dispatch(setLoading(true));
  await store.dispatch(getData());
  store.dispatch(setLoading(false));
};

const App = () => {
  useEffect(() => {
    setLoadingAndFetch();
  }, []);

  // @todo1 be able to add layer that displays geoJson data that I managed to fetch √

  // @todo2 be able to input a city/country name that generates a bbox that then triggers
  // a new fetch of geoJson data of that specific bbox. This city data is also
  // going to be used to center the map.

  // @todo(secondary) implement loading mode & display spinner on load
  // @todo(extra) implement geolocation

  return (
    <Provider store={store}>
      <div className="flex flex-col items-center bg-gray-600 h-screen w-screen p-10">
        <Input />
        <Map />
      </div>
    </Provider>
  );
};

export default App;
