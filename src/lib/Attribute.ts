export type AttributeScore = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20

type AttributeConstructor = Attribute | AttributeScore | number
export default class Attribute {
  private _score: AttributeScore

  constructor(score: AttributeConstructor) {

    this._score = (score instanceof Attribute) ? score.score : score as AttributeScore
  }

  get score() {
    return this._score
  }

  get bonus() {
    return Math.floor((this._score-10)/2)
  }

  set score(score: AttributeScore) {
    this._score = score
  }

  toString() {
    return `${this.score} (${this.bonus})`
  }

}