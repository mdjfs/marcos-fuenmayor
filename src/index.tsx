import { render } from "react-dom";
import { createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import reducers from "./redux/reducers";
import Button from "./components/atoms/button/button";
import Toggle from "./components/atoms/toggle/toggle";
import { setTheme } from "./redux/actions/theme.actions";

const store = createStore(reducers);

const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Button content="SOY UN BOTON" />
      <Toggle
        left="light"
        right="dark"
        onToggle={(status) => dispatch(setTheme(status))}
      />
    </>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("cristoRey")
);
