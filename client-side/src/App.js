import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducers from './store/reducer';
import "./App.css";
import Router from "./screens/Router/Router";

function App() {
  const store = createStore(rootReducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;
