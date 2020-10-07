import React from 'react';

class Triangles extends React.Component {
    render () {
        const triangles = this.props.triangles
        return (
            <div>
                <h1>I got {triangles} triangles tonight!</h1>
            </div>
        );
    };
};

export default Triangles;