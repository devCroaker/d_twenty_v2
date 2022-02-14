import { Armor, Shield, Wepon } from "./Item"


export type OffHand = Wepon | Shield

export class Equiptment {
    keywords: string[] = []
    _armor!: Armor
    _mainHand!: Wepon
    _offHand!: Wepon | Shield
    _ranged!: Wepon
    constructor(armor?: Armor, mainHand?: Wepon, offHand?: OffHand, ranged?: Wepon) {
        this.armor = (armor) ? armor : new Armor
        this.mainHand = (mainHand) ? mainHand : new Wepon
        this.offHand = (offHand) ? offHand : new Wepon
        this.ranged = (ranged) ? ranged : new Wepon('unarmed', ['ranged_unarmed'])
    }
    get armor() { return this._armor}
    set armor(armor: Armor) {
        this.keywords.filter(key => !this._armor?.keywords.includes(key))
        this._armor = armor
        this.keywords.push(...armor.keywords)
    }
    get mainHand() { return this._mainHand }
    set mainHand(mainHand: Wepon) { 
        this.keywords.filter(key => !this._mainHand?.keywords.includes(key))
        this._mainHand = mainHand
        this.keywords.push(...mainHand.keywords)
    }
    get offHand() { return this._offHand }
    set offHand(offHand: OffHand) { 
        this.keywords.filter(key => !this._offHand?.keywords.includes(key))
        this._offHand = offHand
        this.keywords.push(...offHand.keywords.map(keyword => `offHand_${keyword}`))
    }
    get ranged() { return this._ranged }
    set ranged(ranged: Wepon) { 
        this.keywords.filter(key => !this._ranged?.keywords.includes(key))
        this._ranged = ranged
        this.keywords.push(...ranged.keywords.map(keyword => `ranged_${keyword}`))
    }
}
