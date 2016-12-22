import React, {Component} from 'react';

import './App.css';

import Bpm from './Bpm';
import Beats from './Beats';

class App extends Component {
    state = {
        running: false,
        bpm: 60
    };

    toggleRunning = () => {
        this.setState({running: !this.state.running});
    };

    bpmChanged = (bpm) => {
        this.setState({bpm});
    };

    render() {
        const {bpm, running} = this.state;
        const toggleButtonText = this.state.running ? 'Stop' : 'Start';

        return (
            <div className="app">
                <Bpm bpm={bpm} bpmChanged={this.bpmChanged}/>
                <button onClick={this.toggleRunning}>
                    {toggleButtonText}
                </button>
                <Beats bpm={bpm} running={running}/>
            </div>
        );
    }
}

export default App;
