import React from 'react';

class Armbars extends React.Component {
    render () {
        const armbars = this.props.armbars
        return (
            <div>
                <h2>I got {armbars} armbars tonight!</h2>
            </div>
        );
    };
};

export default Armbars;