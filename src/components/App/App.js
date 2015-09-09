import React, { PropTypes } from 'react';
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import SetupStagePage from '../SetupStagePage';
import Footer from '../Footer';
import PlayersStore from '../../stores/PlayersStore';

@withContext
@withStyles(styles)
class App {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object
  };

  render() {
    return (
      <div>
        <Header />
        <SetupStagePage players={PlayersStore} />
        <Footer />
      </div>
    );
  }

}

export default App;
