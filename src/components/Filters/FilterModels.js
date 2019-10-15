import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import * as actions from './actions';
import './filters.scss';

export const FilterModels = ({ models, makes, types, onFilterByModel }) => {

    const [state, setState] = useState({});

    const handleChange = id => event => {
        setState({ ...state, [id]: event.target.checked });
    };

    useEffect(() => {
        let modelIds = [];
        for (let id in state) {
            if (state[id]) {
                modelIds.push(id)
            }
        }
        onFilterByModel(modelIds);
    });

    const elements = models.filter(model => {
        if (makes.length > 0 && makes.includes(model.make_id)) {
            if (types.length > 0 && !types.includes(model.type_id)) {
                return false;
            }
            return true;
        }
        return false;
    }).map(model => (
        <FormControlLabel key={model.id}
            control={
                <Checkbox
                    checked={state[model.id]}
                    onChange={handleChange(model.id)}
                    value={model.id}
                    color="primary"
                />
            }
            label={model.name}
        />
    ));
    const emptyMakes = (
        <div>
            Please select additional filters to show this option
        </div>
    );

    return (
        <React.Fragment>
            {elements.length > 0 ? <FormGroup>{elements}</FormGroup> : emptyMakes }
        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
    models: state.filtersState.models,
    makes: state.filtersState.filterByMakes,
    types: state.filtersState.filterByTypes
});

const mapDispatchToProps = (dispatch) => ({
    onFilterByModel: (models) => dispatch(actions.filterByModels(models))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterModels);
