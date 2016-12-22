import React, {Component} from 'react';

class Bpm extends Component {
    static propTypes = {
        bpm: React.PropTypes.number.isRequired,
        bpmChanged: React.PropTypes.func.isRequired
    };

    changeBpm = (event) => {
        this.props.bpmChanged(parseInt(event.target.value, 10));
    };

    render() {
        return (
            <input type="number" value={this.props.bpm} onChange={this.changeBpm}/>
        );
    }
}

export default Bpm;

