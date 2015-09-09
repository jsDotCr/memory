import { Collection } from 'backbone';
import PlayerItem from './PlayerItem';

class PlayersStore extends Collection {
  get model() {
    return PlayerItem;
  }
}

let instance = new PlayersStore([
  {
    id: 1
  }, {
    id: 2
  }
]);

export default instance;
