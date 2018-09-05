import React from 'react';
import {Route} from 'react-router-dom';

const HomeBtn = () => (
    <Route render={({ history}) => (
        <div className="logo-container">
            <img className="logo" src="https://bit.ly/2LRhgDE" alt="Home Logo" onClick={() => { history.push('/') }}></img>
        </div>
    )} />
  )

  export default HomeBtn;
