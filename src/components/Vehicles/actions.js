import * as actionTypes from './actionTypes';
import motorparkService from '../../services/motorparkService'

const motorpark = new motorparkService();
export const getVehicles = (filters) => {
    return dispatch => {
        dispatch(requestVehicles(filters));
        motorpark.getVehicles(filters).then(vehicles => {
            dispatch({ type: actionTypes.GET_VEHICLES, vehicles });
        }, error => {
            dispatch(invalidRequestVehicles(error));
        });
    }
};

export const requestVehicles = (filters) => {
    return { type: actionTypes.REQUEST_VEHICLES, filters };
};
export const invalidRequestVehicles = (error) => {
    return { type: actionTypes.INVALID_REQUEST_VEHICLES, error };
};