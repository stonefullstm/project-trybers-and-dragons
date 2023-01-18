import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger.numberOfInstances += 1;
  }
  
  static createdArchetypeInstances(): number {
    return this.numberOfInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}