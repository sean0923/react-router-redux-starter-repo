import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import navItems from '../helper/navItems';


export default class Header extends Component {
  renderNavItems () {
    return (
      <div>
        {navItems.map(({ name, route }, idx) => {
          return (
            <div key={idx} className="navigation__item">
              <Link className="link link--white link--medium" to={route}>{name}</Link>
            </div>
          );
        })}
      </div>
    );
  }

  render () {
    return (
      <div>
        <div className="header">
          <h1 className="header__title">Welcome to</h1>
          <h1 className="header__title u-margin-bottom-m">
            React Router Redux Starter Repo
          </h1>
          <div className="navigtion">{this.renderNavItems()}</div>
        </div>
      </div>
    );
  }
}
