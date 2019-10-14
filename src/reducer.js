import { combineReducers } from 'redux';
import vehiclesState from './components/Vehicles/reducer';
import filtersState from './components/Filters/reducer';

export default combineReducers({
    vehiclesState,
    filtersState
});