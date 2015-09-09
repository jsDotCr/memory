import { Model } from 'backbone';

class PlayerItem extends Model {
  get idAttribute() {
    return 'id';
  }

  defaults() {
    return {
      id: 0,
      name: '',
      points: 0
    }
  }

  validate({ name, points }) {
    if (!name || name.length < 2) {
      return `Is ${name} even a real name?`;
    }
    if (typeof points !== 'number') {
      return 'Hey there. Points... That should be a number. Be nice, don\'t let me throw errors like this again!';
    }
  }

  get value() {
    return this.get('name');
  }

  get points() {
    return this.get('points');
  }

  setPlayerName(e) {
    this.set('name', e.target.value);
  }
}

export default PlayerItem;
