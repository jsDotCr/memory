/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Footer.css';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withViewport
@withStyles(styles)
class Footer {

  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };

  render() {
    let { width, height } = this.props.viewport;

    return (
      <div className="footer">
          <span className="footer__text">DWTFYWPL</span>
          <span className="footer__spacer">·</span>
          <a className="footer__link" href="/setup" onClick={Link.handleClick}>Setup stage</a>
          <span className="footer__spacer"> | </span>
          <span ref="viewport" className="footer__viewport footer__text footer__text--muted">Viewport: {width}x{height}</span>
      </div>
    );
  }

}

export default Footer;
