import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducers from "./store/reducer";
import "./App.css";
import Router from "./screens/Router/Router";

function App() {
  const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const tokenInfoFromStorage = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null;
  const initialState = {
    // token: {
    //     tokenInfo: tokenInfoFromStorage,
    // },
    userLogin: { userInfo: userInfoFromStorage },
  };
  const store = createStore(
    rootReducers,
    initialState,
    applyMiddleware(ReduxThunk)
  );
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
