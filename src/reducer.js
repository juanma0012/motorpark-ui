import { combineReducers } from 'redux';
import peopleReducer from './components/PeopleForm/reducer';
import languageReducer from './components/LanguageDropdown/reducer';
import greetingsReducer from './components/GreetingList/reducer';

export default combineReducers({
    peopleReducer,
    languageReducer,
    greetingsReducer
});