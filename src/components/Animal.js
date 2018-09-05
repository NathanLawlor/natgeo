import React from 'react';
import Header from './Header';

class Animal extends React.Component{
    render () {
        return (
            <div className="animal-section">
                <Header />
                <h1>Snow Leopards Are Cool</h1>
                <div className="image-container">
                    <img className="image-animal" src="https://bit.ly/1ggcroc" alt="animal"/>  
                </div>]
                <p className="line">---</p>
            </div>
        )
    }
}

export default Animal;