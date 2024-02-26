import { combineReducers } from 'redux';
import { User } from './userData';
import { Authorization } from './authorization';
import { Registration } from './userRegistration';

export default combineReducers({
    User, Authorization, Registration
})