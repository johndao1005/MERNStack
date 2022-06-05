import {combineReducers} from 'redux';
import authenticationReducer from './authentication.reducer';
import tokenReducer from './token.reducer';

// Thiết lập object state với các đối tượng là  model tương tứng
export default combineReducers({
    authenticationReducer,
    tokenReducer  
});
