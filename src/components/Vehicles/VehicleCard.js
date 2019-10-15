import { connect } from 'react-redux';
import React from 'react';
import Card from '@material-ui/core/Card';
import * as actions from './actions';
import './vehicles.scss';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const VehicleCard = ({ vehicle, makes, types, models, onSaveVehicle, onClose }) => {

    const [values, setValues] = React.useState({
        makeId: vehicle ? vehicle.make_id : '',
        modelId: vehicle ? vehicle.model_id : '',
        typeId: vehicle ? vehicle.type_id : '',
        year: vehicle ? vehicle.year : 2020,
    });
    const clickSave = e => {
        if(values.modelId && values.year){
            onSaveVehicle({
                id: vehicle && vehicle.vehicle_id ? vehicle.vehicle_id : null,
                model: values.modelId,
                year: values.year
            });
            onClose();
        }
    }

    const clickCancel = e => {
        onClose();
    }

    const makeItems = makes.map(make => (
        <MenuItem key={make.id} value={make.id}>{make.name}</MenuItem>
    ));
    const typeItems = types.map(type => (
        <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>
    ));
    const modelItems = models.filter(model => {
        if (values.makeId && values.makeId === model.make_id) {
            if (values.typeId && values.typeId !== model.type_id) {
                return false;
            }
            return true;
        }
        return false;
    }).map(model => (
        <MenuItem key={model.id} value={model.id}>{model.name}</MenuItem>
    ));

    const handleChange = event => {
        if (event.target.name === 'makeId' || event.target.name === 'typeId') {
            setValues(oldValues => ({
                ...oldValues,
                modelId: '',
                [event.target.name]: event.target.value,
            }));
        } else {
            setValues(oldValues => ({
                ...oldValues,
                [event.target.name]: event.target.value,
            }));
        }
    };
    const handleChangeField = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <React.Fragment>
            <Card className="vehicleCard">
                <CardContent className="cardContent">
                    <FormControl variant="filled" className="formControl">
                        <InputLabel htmlFor="makeId">
                            Make
                        </InputLabel>
                        <Select
                            value={values.makeId}
                            onChange={handleChange}
                            inputProps={{
                                name: 'makeId',
                                id: 'makeId',
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {makeItems}
                        </Select>
                    </FormControl>
                    <FormControl variant="filled" className="formControl">
                        <InputLabel htmlFor="typeId">
                            Type
                        </InputLabel>
                        <Select
                            value={values.typeId}
                            onChange={handleChange}
                            inputProps={{
                                name: 'typeId',
                                id: 'typeId',
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {typeItems}
                        </Select>
                    </FormControl>
                    <FormControl variant="filled" className="formControl">
                        <InputLabel htmlFor="modelId">
                            Model
                        </InputLabel>
                        <Select
                            value={values.modelId}
                            onChange={handleChange}
                            inputProps={{
                                name: 'modelId',
                                id: 'modelId',
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {modelItems}
                        </Select>
                    </FormControl>
                    <FormControl variant="filled" className="formControl">
                        <TextField
                            label="Year"
                            value={values.year}
                            onChange={handleChangeField('year')}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            inputProps={{
                                min: '1900',
                                max: '2020',
                            }}
                        />
                    </FormControl>
                </CardContent>
                <CardActions >
                    <Button size="small" color="secondary" className="marginLeft" onClick={clickCancel}>
                        Cancel
                    </Button>
                    <Button size="small" color="primary" onClick={clickSave} >
                        Save
                    </Button>
                </CardActions>
            </Card>
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
    makes: state.filtersState.makes,
    types: state.filtersState.types,
    models: state.filtersState.models
});

const mapDispatchToProps = (dispatch) => ({
    onSaveVehicle: (filters) => dispatch(actions.saveVehicle(filters))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VehicleCard);
