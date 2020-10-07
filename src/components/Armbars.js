import React from 'react';

class Armbars extends React.Component {
    render () {
        const armbars = this.props.armbars
        return (
            <div>
                <h1>I got {armbars} armbars tonight!</h1>
            </div>
        );
    };
};

export default Armbars;