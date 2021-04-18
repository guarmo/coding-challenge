import { useEffect } from "react";
import "./App.css";
import "./tailwind.output.css";
import { Provider } from "react-redux";
import store from "./store";

import Map from "./ components/Map";
import Input from "./ components/Input";

import setLoadingAndFetch from "./utils/setLoadingAndFetch";

const App = () => {
  useEffect(() => {
    setLoadingAndFetch("-1.967771,38.656963,-1.943051,38.674119");
  }, []);

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
