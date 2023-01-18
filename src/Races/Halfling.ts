import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static numberOfInstances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.numberOfInstances += 1;
  }

  static createdRacesInstances(): number {
    return this.numberOfInstances;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}