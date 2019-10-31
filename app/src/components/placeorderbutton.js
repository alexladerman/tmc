import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

function PlaceOrderButton(props) {

  return (
    <NavLink
      to={"order"}
      exact={true}
    >
      <input
        type="button"
        style={{ marginTop: 16 }} type="submit" value="Place Order" />
    </NavLink>
  );
}

export default PlaceOrderButton;