import { useEffect } from "react";
import "./App.css";
import "./tailwind.output.css";
import { Provider } from "react-redux";
import store from "./store";

import Map from "./ components/Map";
import Form from "./ components/Form";
import Help from "./ components/Help";
import Footer from "./ components/Footer";

import setLoadingAndFetch from "./utils/setLoadingAndFetch";

const App = () => {
  useEffect(() => {
    setLoadingAndFetch("11.54,48.14,11.543,48.145");
  }, []);

  return (
    <Provider store={store}>
      <div className="relative flex flex-col items-center bg-gray-600 h-screen w-screen p-10">
        <Help />
        <Form />
        <Map />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
