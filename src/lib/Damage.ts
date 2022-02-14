import { Bonus, Scope } from "./Scope"

export class Damage extends Scope {
    number: number
    dice: number
    stat: string
    bonus: number
    constructor(number?: number, dice?: number, stat?: string, bonus?: number, keywords?: string[], bonuses?: Bonus[]) {
        super(keywords, bonuses)
        this.number = (number) ? number : 1
        this.dice = (dice) ? dice : 1
        this.stat = (stat) ? stat : 'str'
        this.bonus = (bonus) ? bonus : 0
        this.keywords = (keywords) ? keywords : ['bludgeoning']
    }
}
