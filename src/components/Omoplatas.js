import React from 'react';

class Omoplatas extends React.Component {
    render () {
        const omoplatas = this.props.omoplatas
        return (
            <div>
                <h2>I got {omoplatas} omoplatas tonight!</h2>
            </div>
        );
    };
};

export default Omoplatas;