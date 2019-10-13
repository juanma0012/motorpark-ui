import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import motorparkService from './services/motorparkService'

class App extends Component {
    constructor(props) {
        super(props);
        this.motorpark = new motorparkService();
    }
    componentDidMount(){     
        this.motorpark.getVehicles({make:[1,4],year_since:2016, year_until:2018}).then(response => {
            console.log("response getModels", response);
        }, error => {
            console.error(error);
        });
    }
    render() {
        return (
            <div className="app">
            </div>
        );
    }
}

export default App;
