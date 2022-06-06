import {combineReducers} from 'redux';
import {userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
} from './authentication.reducer';
import {
    tokenReducer
} from './token.reducer';

export default combineReducers({
    userLogin :userLoginReducer,
    userRegister :  userRegisterReducer,
    userDetails :userDetailsReducer,
    userUpdateProfile :userUpdateProfileReducer,
    userList :userListReducer,
    userDelete :userDeleteReducer,
    userUpdate : userUpdateReducer,
    tokenReducer: tokenReducer,
});
