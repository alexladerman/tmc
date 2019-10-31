import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

function ReturnHomeButton(props) {

  return (
    <NavLink
      to={"/"}
      exact={true}
    >
      <input
        type="button"
        style={{ marginTop: 16 }} type="submit" value="Go to home" />
    </NavLink>
  );
}

export default ReturnHomeButton;