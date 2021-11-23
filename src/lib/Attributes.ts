import Attribute, { AttributeScore } from './Attribute'

export enum ATTRIBUTES {
  STR = "strength",
  DEX = "dexterity",
  CON = "constitution",
  INT = "intelligence",
  WIS = "wisdom",
  CHA = "charisma",
}

interface AttributesInterface {
  strength: Attribute,
  str: AttributeScore,
  dexterity: Attribute,
  dex: AttributeScore,
  constitution: Attribute,
  con: AttributeScore,
  intelligence: Attribute,
  int: AttributeScore,
  wisdom: Attribute,
  wis: AttributeScore,
  charisma: Attribute,
  cha: AttributeScore,
}

type AttributesConstructor = Attribute | AttributeScore | number

export default class Attributes implements AttributesInterface {
  private _strength: Attribute
  private _dexterity: Attribute
  private _constitution: Attribute
  private _intelligence: Attribute
  private _wisdom: Attribute
  private _charisma: Attribute

  constructor(
    strength: AttributesConstructor,
    dexterity: AttributesConstructor,
    constitution: AttributesConstructor,
    intelligence: AttributesConstructor,
    wisdom: AttributesConstructor,
    charisma: AttributesConstructor,
  ) {
    this._strength = new Attribute(strength)
    this._dexterity = new Attribute(dexterity)
    this._constitution = new Attribute(constitution)
    this._intelligence = new Attribute(intelligence)
    this._wisdom = new Attribute(wisdom)
    this._charisma = new Attribute(charisma)
  }

  get strength(): Attribute {
    return this._strength
  }

  get dexterity(): Attribute {
    return this._dexterity
  }

  get constitution(): Attribute {
    return this._constitution
  }

  get intelligence(): Attribute {
    return this._intelligence
  }

  get wisdom(): Attribute {
    return this._wisdom
  }

  get charisma(): Attribute {
    return this._charisma
  }

  get str(): AttributeScore {
    return this._strength.score
  }

  get dex(): AttributeScore {
    return this._dexterity.score
  }

  get con(): AttributeScore {
    return this._constitution.score
  }

  get int(): AttributeScore {
    return this._intelligence.score
  }

  get wis(): AttributeScore {
    return this._wisdom.score
  }

  get cha(): AttributeScore {
    return this._charisma.score
  }

  set strength(strength: Attribute) {
    this._strength = strength
  }

  set dexterity(dexterity: Attribute) {
    this._dexterity = dexterity
  }

  set constitution(constitution: Attribute) {
    this._constitution = constitution
  }

  set intelligence(intelligence: Attribute) {
    this._intelligence = intelligence
  }

  set wisdom(wisdom: Attribute) {
    this._wisdom = wisdom
  }

  set charisma(charisma: Attribute) {
    this._charisma = charisma
  }

  set str(strength: AttributeScore) {
    this._strength.score = strength
  }

  set dex(dexterity: AttributeScore) {
    this._dexterity.score = dexterity
  }

  set con(constitution: AttributeScore) {
    this._constitution.score = constitution
  }

  set int(intelligence: AttributeScore) {
    this._intelligence.score = intelligence
  }

  set wis(wisdom: AttributeScore) {
    this._wisdom.score = wisdom
  }

  set cha(charisma: AttributeScore) {
    this._charisma.score = charisma
  }

  get(attribute: ATTRIBUTES): AttributeScore {
    switch(attribute) {
      case ATTRIBUTES.STR: 
        return this.str
      case ATTRIBUTES.DEX: 
        return this.dex
      case ATTRIBUTES.CON: 
        return this.con
      case ATTRIBUTES.INT: 
        return this.int
      case ATTRIBUTES.WIS: 
        return this.wis
      case ATTRIBUTES.CHA: 
        return this.cha
      default:
        throw new Error("Tried to get an attribute that does not exist")
    }
  }

  set(attribute: ATTRIBUTES, score: AttributeScore) {
    switch(attribute) {
      case ATTRIBUTES.STR: 
        this.str = score
        break
      case ATTRIBUTES.DEX: 
        this.dex = score
        break
      case ATTRIBUTES.CON: 
        this.con = score
        break
      case ATTRIBUTES.INT: 
        this.int = score
        break
      case ATTRIBUTES.WIS: 
        this.wis = score
        break
      case ATTRIBUTES.CHA: 
        this.cha = score
        break
      default:
        throw new Error("Tried to set an attribute that does not exist")
    }
  }

  toString(): string {
    return `
      Strength: ${this.strength}
      Dexterity: ${this.dexterity}
      Constitution: ${this.constitution}
      Intelligence: ${this.intelligence}
      Wisdom: ${this.wisdom}
      Charisma: ${this.charisma}
    `
  }

}