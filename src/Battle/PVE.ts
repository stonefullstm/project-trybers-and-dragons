import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _legion: SimpleFighter[],
  ) {
    super(_player);
  }
  
  fight(): number {
    while (this._player.lifePoints !== -1 
      && this._legion.some((monster) => monster.lifePoints !== -1)) {
      const turnNonster = this._legion
        .findIndex((monster) => monster.lifePoints !== -1);
      if (getRandomInt(1, 3) === 1) {
        this._player.attack(this._legion[turnNonster]);
      } else {
        this._legion[turnNonster].attack(this._player);
      }
    }
    return super.fight();
  }
}