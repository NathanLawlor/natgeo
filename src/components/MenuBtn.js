import React from 'react';
import {Route} from 'react-router-dom';

const MenuBtn = () => (
    <Route render={({ history}) => (
      <button type='button' onClick={() => { history.push('/Menu') }}> Menu </button>
    )} />
  )

  export default MenuBtn;

