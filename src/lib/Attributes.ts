import { d } from './Dice'

export class Attribute {
    value: number
    constructor(value?: number) {
        this.value = (value) ? value : d('2d6+6')
    }
    get bonus() {
        return Math.floor((this.value-10)/2)
    }
}

export class Attributes {
    [key: string]: Attribute
    str: Attribute
    dex: Attribute
    con: Attribute
    int: Attribute
    wis: Attribute
    cha: Attribute
    constructor(str?: Attribute, dex?: Attribute, con?: Attribute, int?: Attribute, wis?: Attribute, cha?: Attribute) {
        this.str = (str) ? str : new Attribute
        this.dex = (dex) ? dex : new Attribute
        this.con = (con) ? con : new Attribute
        this.int = (int) ? int : new Attribute
        this.wis = (wis) ? wis : new Attribute
        this.cha = (cha) ? cha : new Attribute
    }
}

export class AttributeBonuses {
    attribute: string
    bonus: number
    constructor(attribute: string, bonus: number) {
        this.attribute = attribute
        this.bonus = bonus
    }
}