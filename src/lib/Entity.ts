import Attributes from './Attributes'
import Level from './Level'
import Race from './Race'

class Entity {
  private _attributes: Attributes
  private _race: Race
  private _levels: Level[]

  constructor(attributes: Attributes, race: Race) {
    this._attributes = race.applyAttributeBonuses(attributes)
    this._race = race
    this._levels = []
  }

}