import React from 'react';

class Omoplatas extends React.Component {
    render () {
        const omoplatas = this.props.omoplatas
        return (
            <div>
                <h1>I got {omoplatas} omoplatas tonight!</h1>
            </div>
        );
    };
};

export default Omoplatas;