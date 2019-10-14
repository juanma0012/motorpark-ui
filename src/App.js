import React, { Component } from 'react';
import './App.css';
import Vehicles from './components/Vehicles/Vehicles';

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){     

    }
    render() {
        return (
            <div className="app">
                <Vehicles />
            </div>
        );
    }
}

export default App;
