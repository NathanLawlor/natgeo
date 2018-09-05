import React from 'react';
import MenuBtn from './MenuBtn';
import HomeBtn from './HomeButton';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <HomeBtn />
                <ul className="nav">
                    <li className="subscribe">Subscribe</li>
                    <li className="icon">P</li>
                    <li className="icon">S</li>
                    <li className="menu"><MenuBtn /></li>
                </ul>
            </div>
        );      
    }
}

export default Header;