import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import AppContainer from './components/AppContainer';
import * as vehiclesActions from './components/Vehicles/actions';
import * as filtersActions from './components/Filters/actions';

class App extends Component {
    componentDidMount() {
        this.props.onGetVehicles();
        this.props.onGetMakes();
        this.props.onGetTypes();
    }
    render() {
        return (
            <AppContainer />
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onGetVehicles: () => dispatch(vehiclesActions.getVehicles()),
    onGetMakes: () => dispatch(filtersActions.getMakes()),
    onGetTypes: () => dispatch(filtersActions.getTypes()),
});


export default connect(
    null,
    mapDispatchToProps
)(App);
