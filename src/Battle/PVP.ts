import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _player1: Fighter,
    private _player2: Fighter,
  ) {
    super(_player1);
  }

  get player1(): Fighter { return this._player1; }
  get player2(): Fighter { return this._player2; }

  fight(): number {
    while (this._player1.lifePoints !== -1 && this._player2.lifePoints !== -1) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }
    return super.fight();
  }
}