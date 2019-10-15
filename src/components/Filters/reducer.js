import { updateObject, createReducer } from '../../services/utility';
import * as actionTypes from './actionTypes';

const initialState = {
    makes: [],
    models: [],
    types: [],
    status: '',
    filterByMakes: [],
    filterByTypes: [],
    filterByModels: [],
    filterYearSince: null,
    filterYearUntil: null
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

const filterByMakes = (state, action) => {
    return updateObject(state, {
        filterByMakes: action.makes,
        filterByModels: []
    });
};

const filterByTypes = (state, action) => {
    return updateObject(state, {
        filterByTypes: action.types,
        filterByModels: []
    });
};

const filterByModels = (state, action) => {
    return updateObject(state, {
        filterByModels: action.models,
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
    [actionTypes.FILTER_BY_MAKES]: filterByMakes,
    [actionTypes.FILTER_BY_TYPES]: filterByTypes,
    [actionTypes.FILTER_BY_MODELS]: filterByModels,
    [actionTypes.INVALID_REQUEST]: invalidRequest
});
