import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  static numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer.numberOfInstances += 1;
  }
  
  static createdArchetypeInstances(): number {
    return this.numberOfInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}