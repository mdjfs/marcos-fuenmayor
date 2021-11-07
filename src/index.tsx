import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import MarcosFuenmayor from "./components/pages/marcosfuenmayor/marcosfuenmayor";
import "./global.scss";

const store = createStore(reducers);

render(
  <Provider store={store}>
    <MarcosFuenmayor />
  </Provider>,
  document.getElementById("cristoRey")
);
