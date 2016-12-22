import React, {Component} from 'react';

import Beat from './Beat';

class Beats extends Component {
    static propTypes = {
        beatCount: React.PropTypes.number,
        running: React.PropTypes.bool.isRequired,
        bpm: React.PropTypes.number.isRequired
    };

    static defaultProps = {
        beatCount: 4
    };

    state = {
        beatInterval: null,
        activeBeat: -1
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.running) {
            if (nextProps.bpm !== this.props.bpm) {
                this.stop();
            }
            this.start(nextProps.bpm);
        } else {
            this.stop();
            this.setState({activeBeat: -1});
        }
    }

    stop() {
        clearInterval(this.state.beatInterval);
    }

    start(bpm) {
        const beatInterval = setInterval(this.nextBeat, this.bpmInMilis(bpm));
        this.setState({beatInterval})
    }

    nextBeat = () => {
        const {activeBeat} = this.state;
        this.setState({
            activeBeat: (activeBeat + 1 <= this.props.beatCount) ? (activeBeat) + 1 : 0
        })
    };

    bpmInMilis(bpm) {
        const secondsInMinute = 60;
        return secondsInMinute / bpm * 1000;
    }

    render() {
        const beats = Array.from(new Array(this.props.beatCount)).map((a, i) =>
            <Beat active={this.state.activeBeat === i} key={i}/>
        );

        return (
            <div>
                {beats}
            </div>
        );
    }
}

export default Beats;
