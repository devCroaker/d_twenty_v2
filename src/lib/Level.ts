import { Dice } from "./Dice";

export default class Level {
  private _level: number
  private _hitDice: Dice

  constructor(level: number, hitDice: Dice) {
    this._level = level
    this._hitDice = hitDice
  }
}