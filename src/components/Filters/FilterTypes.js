import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import * as actions from './actions';
import './filters.scss';

export const FilterTypes = ({ types, onFilterByType }) => {

    const [state, setState] = useState({});

    const handleChange = (id, type) => event => {
        setState({ ...state, [id]: event.target.checked });
    };

    useEffect(() => {
        let typeIds = [];
        for (let id in state) {
            if (state[id]) {
                typeIds.push(id)
            }
        }
        onFilterByType(typeIds);
    });

    const elements = types.map(type => (
        <FormControlLabel key={type.id}
            control={
                <Checkbox
                    checked={state[type.id]}
                    onChange={handleChange(type.id)}
                    value={type.id}
                    color="primary"
                />
            }
            label={type.name}
        />
    ));

    return (
        <React.Fragment>
            <FormGroup>
                {elements}
            </FormGroup>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
    types: state.filtersState.types
});

const mapDispatchToProps = (dispatch) => ({
    onFilterByType: (types) => dispatch(actions.filterByTypes(types))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterTypes);
