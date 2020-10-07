import React from 'react';

class Triangles extends React.Component {
    render () {
        const triangles = this.props.triangles
        return (
            <div>
                <h2>I got {triangles} triangles tonight!</h2>
            </div>
        );
    };
};

export default Triangles;