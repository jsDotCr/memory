/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class Header {

  render() {
    return (
      <header className="header">
        <h1 className="header__title">Memory!</h1>
      </header>
    );
  }

}

export default Header;
