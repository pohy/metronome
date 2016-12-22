import React, {Component} from 'react';

import './App.css';

import Bpm from './Bpm';
import Beats from './Beats';
import Audio from './audio';

class App extends Component {
    state = {
        running: false,
        bpm: 60,
        audioSupported: true,
        audio: new Audio()
    };

    constructor(props) {
        super(props);

        this.state.audio
            .init()
            .catch((error) => {
                console.error(error);
                this.setState({audioSupported: false})
            });
    }

    toggleRunning = () => {
        this.setState({running: !this.state.running});
    };

    bpmChanged = (bpm) => {
        this.setState({bpm});
    };

    render() {
        const {bpm, running, audio} = this.state;
        const toggleButtonText = this.state.running ? 'Stop' : 'Start';

        return (
            <div className="app">
                <Bpm bpm={bpm} bpmChanged={this.bpmChanged}/>
                <button onClick={this.toggleRunning}>
                    {toggleButtonText}
                </button>
                <Beats bpm={bpm} running={running} audio={audio}/>
                {this.state.audioSupported ? '' : <h1>WebAudio is not supported in your browser.</h1>}
            </div>
        );
    }
}

export default App;
