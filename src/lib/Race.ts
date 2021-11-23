import { AttributeScore } from "./Attribute"
import Attributes, { ATTRIBUTES } from "./Attributes"

type AttributeBonus = {
  attribute: ATTRIBUTES,
  bonus: AttributeScore
}

interface RaceInterface {
  name: string,
  attributeBonuses: AttributeBonus[],
  applyAttributeBonuses: (attributes: Attributes) => Attributes
}

export default class Race implements RaceInterface {
  private _name: string
  private _attributeBonuses: AttributeBonus[]

  constructor(name: string, attributeBonuses: AttributeBonus[]) {
    this._name = name
    this._attributeBonuses = attributeBonuses
  }

  get name() {
    return this._name
  }

  get attributeBonuses() {
    return this._attributeBonuses
  }

  applyAttributeBonuses(attributes: Attributes): Attributes {
    const alteredAttributes = attributes
    this.attributeBonuses.forEach(attributeBonus => {
      const { attribute, bonus } = attributeBonus,
        currentAttribute = attributes.get(attribute),
        newAttribute = Math.min(20, currentAttribute + bonus) as AttributeScore
      alteredAttributes.set(attribute, newAttribute)
    })
    return alteredAttributes
  }

}