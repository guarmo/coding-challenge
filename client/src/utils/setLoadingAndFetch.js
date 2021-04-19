import store from "../store";
import { getData, setLoading } from "../actions/data";

const setLoadingAndFetch = async (coords) => {
  store.dispatch(setLoading(true));
  await store.dispatch(getData(coords));
  store.dispatch(setLoading(false));
};

export default setLoadingAndFetch;
