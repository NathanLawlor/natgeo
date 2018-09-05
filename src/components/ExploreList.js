import React from 'react';
import AnimalLink from './AnimalLink';

class ExploreList extends React.Component {
    render() {
        return (
            <div className="list-explore">
            <h2><span>  |  </span> Latest Stories: </h2>
                <ul>
                    <li className="latestItems">Sponsor Content</li>
                    <li className="latestItems">Culture & Exploration</li>
                    <li className="latestItems">Science & Innovation</li>
                    <AnimalLink />
                </ul>
            </div>
        );      
    }
}

export default ExploreList;