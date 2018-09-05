import React from 'react';
import {Route} from 'react-router-dom';

const MenuBtn = () => (
    <Route render={({ history}) => (
      <li className="latestItems" onClick={() => { history.push('/Animal-Page') }}> Animal </li>
    )} />
  )

  export default MenuBtn;

