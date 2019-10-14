import { updateObject, createReducer } from '../../services/utility';
import * as actionTypes from './actionTypes';

const initialState = {
    makes: [],
    models: [],
    types: [],
    status: ''
};

const getMakes = (state, action) => {
    return updateObject(state, {
        makes: action.makes,
        status: ''
    });
};

const getModels = (state, action) => {
    return updateObject(state, {
        models: action.models,
        status: ''
    });
};

const getTypes = (state, action) => {
    return updateObject(state, {
        types: action.types,
        status: ''
    });
};

const invalidRequest = (state, action) => {
    return updateObject(state, {
        status: action.status
    });
};

export default createReducer(initialState, {
    [actionTypes.GET_MODELS]: getModels,
    [actionTypes.GET_MAKES]: getMakes,
    [actionTypes.GET_TYPES]: getTypes,
    [actionTypes.INVALID_REQUEST]: invalidRequest
});
