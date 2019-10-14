import * as actionTypes from './actionTypes';
import motorparkService from '../../services/motorparkService'

const motorpark = new motorparkService();
export const getModels = (makeIds) => {
    return dispatch => {
        motorpark.getModels(makeIds).then(models => {
            dispatch({ type: actionTypes.GET_MODELS, models });
        }, error => {
            dispatch(invalidRequest(`Error when the Models list was loading. ${error}`));
        });
    }
};

export const getMakes = () => {
    return (dispatch, getState) => {
        motorpark.getMakes().then(makes => {
            dispatch({ type: actionTypes.GET_MAKES, makes });
            let state = getState();
            dispatch(getModels({ make: makes.map(makeData => makeData.id) }));
        }, error => {
            dispatch(invalidRequest(`Error when the Makes list was loading. ${error}`));
        });
    }
};

export const getTypes = () => {
    return dispatch => {
        motorpark.getTypes().then(types => {
            dispatch({ type: actionTypes.GET_TYPES, types });
        }, error => {
            dispatch(invalidRequest(`Error when the Types list was loading. ${error}`));
        });
    }
};

export const invalidRequest = (error) => {
    return { type: actionTypes.INVALID_REQUEST, error };
};

export const filterByMake = () => {
    return (dispatch, getState) => {

    }
};