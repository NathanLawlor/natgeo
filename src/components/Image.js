import React from 'react';

class Image extends React.Component {
    render() {
        return (
            <div>
                <div className="image-container">
                    <img className="image-beach"src="https://bit.ly/2Q21vwJ" alt="beach"></img>         
                </div>
                <p className="line">---</p>
            </div>
        );      
    }
}

export default Image;