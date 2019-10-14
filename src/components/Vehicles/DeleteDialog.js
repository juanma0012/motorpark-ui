import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as actions from './actions';
import './vehicles.css';

export const DeleteDialog = ({ vehicleToRemove, onRemoveVehicle, onCloseDeleteDialog }) => {
    const confirmRemove = e => {
        onRemoveVehicle(vehicleToRemove.vehicle_id);
    }

    const handleClose = () => {
        onCloseDeleteDialog();
    };

    return (
        <React.Fragment>
            {vehicleToRemove &&
                <Dialog
                    open={vehicleToRemove ? true : false}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"Are you sure to delete this vehicle?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <b>Vehicle: {vehicleToRemove.make_name}, {vehicleToRemove.model_name}</b><br />
                            {vehicleToRemove.type_name}, {vehicleToRemove.year}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={confirmRemove} color="primary" autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            }
        </React.Fragment>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onRemoveVehicle: (vehicleId) => dispatch(actions.removeVehicle(vehicleId)),
    onCloseDeleteDialog: () => dispatch(actions.askRemoveVehicle(null))
});

const mapStateToProps = (state) => ({
    vehicleToRemove: state.vehiclesReducer.vehicleToRemove
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteDialog);
