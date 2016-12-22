import React, {Component} from 'react';

import './Beat.css';

class Beat extends Component {
    // TODO: multiple sounds
    static propTypes = {
        active: React.PropTypes.bool
    };

    render() {
        const cssClasses = `beat ${this.props.active ? 'active' : ''}`;

        return (
            <div className={cssClasses}>
                &nbsp;
            </div>
        );
    }
}

export default Beat;
