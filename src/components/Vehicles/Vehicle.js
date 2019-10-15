import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';
import VehicleCard from './VehicleCard';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TimeToLeave from '@material-ui/icons/TimeToLeave';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

import './vehicles.scss';

const Vehicle = ({ data, onAskRemoveVehicle }) => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const deleteClick = () => {
        onAskRemoveVehicle(data);
    };


    return (
        <React.Fragment>
            <ListItem className="vehicle" button onClick={handleClick}>
                <ListItemAvatar>
                    <Avatar>
                        <TimeToLeave />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={`${data.make_name}, ${data.model_name}`}
                    secondary={`${data.type_name}, ${data.year}`}
                />
                <IconButton edge="start" aria-label="show more">
                    {open ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
                <ListItemSecondaryAction onClick={deleteClick}>
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {open ? <VehicleCard vehicle={data} onClose={handleClick}/> : null}
            </Collapse>
        </React.Fragment >
    );
};

Vehicle.propTypes = {
    data: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    onAskRemoveVehicle: (vehicle) => dispatch(actions.askRemoveVehicle(vehicle))
});

export default connect(
    null,
    mapDispatchToProps
)(Vehicle);

