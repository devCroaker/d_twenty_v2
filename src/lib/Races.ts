import { ATTRIBUTES } from './Attributes'
import Race from './Race'

class Races {
  [key: string]: Race

  constructor() {
    this.human = new Race(
      "human",
      [
        {attribute: ATTRIBUTES.STR, bonus: 1},
        {attribute: ATTRIBUTES.DEX, bonus: 1},
        {attribute: ATTRIBUTES.CON, bonus: 1},
        {attribute: ATTRIBUTES.INT, bonus: 1},
        {attribute: ATTRIBUTES.WIS, bonus: 1},
        {attribute: ATTRIBUTES.CHA, bonus: 1},
      ]
    )
    this.dwarf = new Race(
      "dwarf",
      [
        {attribute: ATTRIBUTES.CON, bonus: 2},
        {attribute: ATTRIBUTES.WIS, bonus: 1},
      ]
    )
    this.elf = new Race(
      "elf",
      [
        {attribute: ATTRIBUTES.DEX, bonus: 2},
        {attribute: ATTRIBUTES.INT, bonus: 1},
      ]
    )
    this.firbolg = new Race(
      "firbolg",
      [
        {attribute: ATTRIBUTES.WIS, bonus: 2},
        {attribute: ATTRIBUTES.STR, bonus: 1},
      ]
    )
    this.gnome = new Race(
      "gnome",
      [
        {attribute: ATTRIBUTES.INT, bonus: 2},
        {attribute: ATTRIBUTES.DEX, bonus: 1},
      ]
    )
    this.halfelf = new Race(
      "half-elf",
      [
        {attribute: ATTRIBUTES.CHA, bonus: 2},
        {attribute: ATTRIBUTES.STR, bonus: 1},
      ]
    )
    this.halforc = new Race(
      "half-orc",
      [
        {attribute: ATTRIBUTES.STR, bonus: 2},
        {attribute: ATTRIBUTES.CON, bonus: 1},
      ]
    )
    this.halfling = new Race(
      "halfling",
      [
        {attribute: ATTRIBUTES.DEX, bonus: 2},
        {attribute: ATTRIBUTES.CHA, bonus: 1},
      ]
    )
  }
}

export default new Races()
