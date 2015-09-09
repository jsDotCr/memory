/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './SetupStagePage.css';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withViewport
@withStyles(styles)
class SetupStagePage {
  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };

  render() {
    let players = this.props.players.map(player => {
      return (
        <label key={player.id} className="stage__player" ref="player{player.id || player.cid}">
          I am <input type="text" required onChange={ player.setPlayerName.bind(player) } />
        </label>
      );
    });

    return (
      <form className="stage">
        { players }
      </form>
    );
  }
}

export default SetupStagePage;
